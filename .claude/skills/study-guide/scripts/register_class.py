#!/usr/bin/env python3
"""Register a finished lecture in the repo's landing page + READMEs, or archive one.

Register:
    register_class.py \
        --repo "/Users/adam/Projects/Study Guide" \
        --profile mindy \
        --course-id microbiology-biol2420 \
        --course-name "Microbiology (BIOL 2420)" \
        --lecture-path courses/microbiology-biol2420/02-bacteria/index.html \
        --lecture-title "Bacterial Structure"

Archive a finished class (or --restore it back to the active list):
    register_class.py --repo … --profile mindy --course-id … --course-name "…" \
        --lecture-path courses/…/index.html --lecture-title "…" --archive

The landing page is split into PROFILES (one per student — `mindy`, `macy`), each a
`<div class="profile" data-profile="ID">…</div><!-- /profile:ID -->` block holding
that student's active `.course` sections followed by a `<details class="archive">`
for past classes. Register adds an <a class="lecture"> card under the matching course
section in the profile's ACTIVE list (creating the section if needed) and prints the
README snippets. --archive / --restore move an existing card between the active list
and the archive.

Landing cards are a UNIFORM list: every class uses the same icon (LANDING_ICON =
shieldcheck) and is title-only. --lecture-icon / --course-icon are ignored, and there
is no subtitle unless you deliberately pass --lecture-sub.

Gates (register only): the lecture must have a passing coverage-audit.md, and its
`Store.key` must not match any other lecture's (a cloned key makes two apps overwrite
each other's progress on the shared GitHub Pages origin).

Idempotent: skips the card if the lecture-path is already linked.
"""
import argparse
import re
import sys
from pathlib import Path

# Every class on the landing page uses the SAME icon — the cards are a uniform
# list, not per-topic branding. Keep this fixed; do not vary it per lecture.
LANDING_ICON = "shieldcheck"

CARD_TMPL = '''    <a class="lecture" href="{path}">
      <span class="ic"><svg class="i"><use href="#i-{licon}"/></svg></span>
      <span class="tx"><b>{title}</b>{sub}</span>
      <span class="go"><svg class="i"><use href="#i-arrow"/></svg></span>
    </a>
'''

# Course-section headings are title-only (no icon) — the user removed the per-course
# icons so the landing page reads as a clean list.
SECTION_TMPL = '''  <div class="course">
    <h2>{cname}</h2>
{card}  </div>

'''

STORE_KEY = re.compile(r'const Store\s*=\s*\{\s*key:"([^"]+)"')


def require_passing_audit(repo: Path, a) -> None:
    """Hard gate: a class cannot be registered/published unless a coverage audit
    has run and PASSED. The audit report must sit next to the lecture's index.html
    as `coverage-audit.md` and contain a line like `VERDICT: PASS` (or COMPLETE).
    This makes the audit effectively automatic — you can't finish a guide without it."""
    lec_dir = (repo / a.lecture_path).parent
    report = lec_dir / "coverage-audit.md"
    if not report.exists():
        sys.exit(
            "\nBLOCKED: no coverage audit found for this lecture.\n"
            f"  Expected: {report}\n"
            "  Run the mandatory coverage audit (reference/coverage-audit.md) with an\n"
            "  independent subagent, save its report to coverage-audit.md ending in a\n"
            "  `VERDICT: PASS` line, then register. The audit is not optional.\n")
    text = report.read_text(encoding="utf-8")
    m = re.search(r"VERDICT:\s*(PASS|COMPLETE|FAIL|SIGNIFICANT|MINOR)", text, re.I)
    if not m:
        sys.exit(f"\nBLOCKED: {report} has no `VERDICT: PASS`/`FAIL` line. Finish the audit first.\n")
    verdict = m.group(1).upper()
    if verdict in ("FAIL", "SIGNIFICANT"):
        sys.exit(
            f"\nBLOCKED: coverage audit verdict is {verdict}. Add the missing content to all\n"
            "  files, re-run the audit until it PASSES, then register.\n")
    print(f"coverage audit: {report.name} → VERDICT {verdict} — gate passed.")


def require_unique_store_key(repo: Path, a) -> None:
    """Hard gate: every app needs its own localStorage key. All apps share one origin
    when hosted, so a key left over from the clone template silently merges two
    lectures' flashcard boxes and quiz state."""
    lec = (repo / a.lecture_path).resolve()
    m = STORE_KEY.search(lec.read_text(encoding="utf-8"))
    if not m:
        sys.exit(f"\nBLOCKED: no `const Store = {{ key:\"…\"` found in {lec}.\n")
    key = m.group(1)
    for other in repo.glob("courses/*/*/index.html"):
        if other.resolve() == lec:
            continue
        o = STORE_KEY.search(other.read_text(encoding="utf-8"))
        if o and o.group(1) == key:
            sys.exit(
                f"\nBLOCKED: Store.key \"{key}\" is already used by {other.relative_to(repo)}.\n"
                "  Give this lecture a unique key (e.g. <course>_<topic>_v1) so the two apps\n"
                "  don't overwrite each other's progress, then register.\n")
    print(f"store key: \"{key}\" is unique — gate passed.")


def profile_parts(html: str, profile: str) -> tuple[str, str, str, str, str]:
    """Split the page around one profile block → (before, active, archive_head,
    archive_body, after). `archive_head` is the <details>+<summary> opening."""
    open_m = re.search(r'<div class="profile" data-profile="%s"[^>]*>' % re.escape(profile), html)
    close = html.find(f"</div><!-- /profile:{profile} -->")
    if not open_m or close == -1:
        sys.exit(f"Could not find the '{profile}' profile block in index.html")
    body_start = open_m.end()
    arch = re.compile(r'<details class="archive">.*?</summary>', re.DOTALL).search(html, body_start, close)
    arch_close = html.rfind("</details>", body_start, close)
    if not arch or arch_close == -1:
        sys.exit(f"Profile '{profile}' has no <details class=\"archive\"> block")
    return (html[:body_start], html[body_start:arch.start()], html[arch.start():arch.end()],
            html[arch.end():arch_close], html[arch_close:])


def add_card(region: str, course_name: str, card: str) -> str:
    sec = re.compile(r'(<div class="course">\s*<h2>%s</h2>)(.*?)(</div>)'
                     % re.escape(course_name), re.DOTALL)
    m = sec.search(region)
    if m:
        new_sec = m.group(1) + m.group(2).rstrip() + "\n" + card + "  " + m.group(3)
        return region[:m.start()] + new_sec + region[m.end():]
    return region.rstrip() + "\n\n" + SECTION_TMPL.format(cname=course_name, card=card) + "  "


def remove_card(region: str, path: str) -> tuple[str, str | None]:
    card = re.compile(r'[ \t]*<a class="lecture" href="%s">.*?</a>\n' % re.escape(path), re.DOTALL)
    m = card.search(region)
    if not m:
        return region, None
    region = region[:m.start()] + region[m.end():]
    # Drop a course section left with no cards.
    region = re.sub(r'[ \t]*<div class="course">\s*<h2>[^<]*</h2>\s*</div>\n*', "", region)
    return region, m.group(0)


def update_landing(repo: Path, a) -> None:
    f = repo / "index.html"
    html = f.read_text(encoding="utf-8")
    before, active, arch_head, arch_body, after = profile_parts(html, a.profile)

    if a.archive or a.restore:
        src, dst = (active, arch_body) if a.archive else (arch_body, active)
        src, card = remove_card(src, a.lecture_path)
        if card is None:
            where = "active list" if a.archive else "archive"
            sys.exit(f"'{a.lecture_path}' is not in {a.profile}'s {where}")
        dst = add_card(dst, a.course_name, card)
        active, arch_body = (src, dst) if a.archive else (dst, src)
        print(f"landing page: {'archived' if a.archive else 'restored'} '{a.lecture_title}' ({a.profile})")
    else:
        if a.lecture_path in html:
            print(f"landing page: already links {a.lecture_path} — skipping")
            return
        sub = f"<small>{a.lecture_sub}</small>" if a.lecture_sub else ""
        card = CARD_TMPL.format(path=a.lecture_path, licon=LANDING_ICON,
                                title=a.lecture_title, sub=sub)
        active = add_card(active, a.course_name, card)
        print(f"landing page: added '{a.lecture_title}' under '{a.course_name}' ({a.profile})")

    f.write_text(before + active + arch_head + arch_body + after, encoding="utf-8")


def print_readme_snippets(a) -> None:
    lec_dir = str(Path(a.lecture_path).parent.name)
    print("\n--- Paste into courses/%s/README.md (Topics table) ---" % a.course_id)
    print(f"| {lec_dir.split('-')[0]} | **{a.lecture_title}** | "
          f"[study guide]({lec_dir}/study-guide.md) · "
          f"[lecture outline]({lec_dir}/lecture-outline.md) · "
          f"[glossary]({lec_dir}/key-terms-glossary.md) · "
          f"[interactive app]({lec_dir}/index.html) · "
          f"[{a.notes_label}]({lec_dir}/transcript-corrections.md) |")
    print("\n--- Ensure root README.md Courses list has ---")
    print(f"- [{a.course_name}](courses/{a.course_id}/) — …")


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--repo", required=True)
    ap.add_argument("--profile", required=True, help="landing-page profile id, e.g. mindy or macy")
    ap.add_argument("--course-id", required=True)
    ap.add_argument("--course-name", required=True)
    ap.add_argument("--course-icon", default="flask", help="(ignored — section headings are icon-free)")
    ap.add_argument("--lecture-path", required=True)
    ap.add_argument("--lecture-title", required=True)
    ap.add_argument("--lecture-icon", default="shieldcheck",
                    help="(ignored for the landing card — all classes share LANDING_ICON)")
    ap.add_argument("--lecture-sub", default="",
                    help="optional <small> subtitle; empty by default (title-only cards)")
    ap.add_argument("--notes-label", default="transcript flags",
                    help='README link label for transcript-corrections.md ("source notes" when there is no recording)')
    mode = ap.add_mutually_exclusive_group()
    mode.add_argument("--archive", action="store_true", help="move the class into the profile's archive")
    mode.add_argument("--restore", action="store_true", help="move the class back out of the archive")
    a = ap.parse_args()
    repo = Path(a.repo)
    if a.archive or a.restore:
        update_landing(repo, a)
        return
    require_passing_audit(repo, a)      # hard gate — no publish without a passing audit
    require_unique_store_key(repo, a)   # hard gate — no shared progress keys
    update_landing(repo, a)
    print_readme_snippets(a)


if __name__ == "__main__":
    main()
