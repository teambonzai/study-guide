#!/usr/bin/env python3
"""Register a finished lecture in the repo's landing page + READMEs.

Usage:
    register_class.py \
        --repo "/Users/adam/Projects/Study Guide" \
        --course-id microbiology-biol2420 \
        --course-name "Microbiology (BIOL 2420)" \
        --course-icon flask \
        --lecture-path courses/microbiology-biol2420/02-bacteria/index.html \
        --lecture-title "Bacterial Structure"

Adds an <a class="lecture"> card to the root index.html landing page under the
matching course section (creating the .course section if it's a new course), and
prints the exact snippets to paste into the course README table and root README
courses list.

Landing cards are a UNIFORM list: every class uses the same icon (LANDING_ICON =
shieldcheck) and is title-only. --lecture-icon is ignored for the card, and there
is no subtitle unless you deliberately pass --lecture-sub. Course-section icons
are sprite ids WITHOUT the i- prefix; the landing sprite ships i-shield/
shieldcheck/flask/arrow/info.

Idempotent: skips the landing-page card if the lecture-path is already linked.
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

SECTION_TMPL = '''  <div class="course">
    <h2><svg class="i"><use href="#i-{cicon}"/></svg>{cname}</h2>
{card}  </div>

'''


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


def update_landing(repo: Path, a) -> None:
    f = repo / "index.html"
    html = f.read_text(encoding="utf-8")
    if a.lecture_path in html:
        print(f"landing page: already links {a.lecture_path} — skipping")
        return
    # No per-lecture subtitle on the landing cards — they stay a clean title-only
    # list. (Pass --lecture-sub only if you deliberately want a <small> line.)
    sub = f"<small>{a.lecture_sub}</small>" if a.lecture_sub else ""
    card = CARD_TMPL.format(path=a.lecture_path, licon=LANDING_ICON,
                            title=a.lecture_title, sub=sub)

    # Find the course section by its <h2> text.
    sec = re.compile(
        r'(<div class="course">\s*<h2>.*?%s.*?</h2>)(.*?)(</div>)'
        % re.escape(a.course_name), re.DOTALL)
    m = sec.search(html)
    if m:
        new_sec = m.group(1) + m.group(2).rstrip() + "\n" + card + "  " + m.group(3)
        html = html[:m.start()] + new_sec + html[m.end():]
        print(f"landing page: added card under existing course '{a.course_name}'")
    else:
        block = SECTION_TMPL.format(cicon=a.course_icon, cname=a.course_name, card=card)
        # Insert the new course section after the last existing one — anchor on the
        # first trailing element (.foot, else .note) so it works as the page evolves.
        anchor = next((html.find(a) for a in ('<div class="foot">', '<div class="note">')
                       if html.find(a) != -1), -1)
        if anchor == -1:
            sys.exit("Could not find a .foot/.note anchor to insert a new course before")
        html = html[:anchor] + block + html[anchor:]
        print(f"landing page: created new course section '{a.course_name}'")
    f.write_text(html, encoding="utf-8")


def print_readme_snippets(a) -> None:
    lec_dir = str(Path(a.lecture_path).parent.name)
    print("\n--- Paste into courses/%s/README.md (Topics table) ---" % a.course_id)
    print(f"| {lec_dir.split('-')[0]} | **{a.lecture_title}** | "
          f"[study guide]({lec_dir}/study-guide.md) · "
          f"[lecture outline]({lec_dir}/lecture-outline.md) · "
          f"[glossary]({lec_dir}/key-terms-glossary.md) · "
          f"[interactive app]({lec_dir}/index.html) · "
          f"[transcript flags]({lec_dir}/transcript-corrections.md) |")
    print("\n--- Ensure root README.md Courses list has ---")
    print(f"- [{a.course_name}](courses/{a.course_id}/) — …")


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--repo", required=True)
    ap.add_argument("--course-id", required=True)
    ap.add_argument("--course-name", required=True)
    ap.add_argument("--course-icon", default="flask")
    ap.add_argument("--lecture-path", required=True)
    ap.add_argument("--lecture-title", required=True)
    ap.add_argument("--lecture-icon", default="shieldcheck",
                    help="(ignored for the landing card — all classes share LANDING_ICON)")
    ap.add_argument("--lecture-sub", default="",
                    help="optional <small> subtitle; empty by default (title-only cards)")
    a = ap.parse_args()
    require_passing_audit(Path(a.repo), a)  # hard gate — no publish without a passing audit
    update_landing(Path(a.repo), a)
    print_readme_snippets(a)


if __name__ == "__main__":
    main()
