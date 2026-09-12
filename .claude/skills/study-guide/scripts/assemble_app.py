#!/usr/bin/env python3
"""Assemble a lecture's index.html by cloning a template app and swapping in its data.

Usage:
    assemble_app.py <lecture-dir> [--template <index.html>] [--replacements <pairs.json>]

Inputs in <lecture-dir>:
    build/TOPICS.js CARDS.js QUIZ.js SCENARIOS.js GLOSSARY.js SLIDE_NOTES.js
          TESTCHIPS.js MNEMONICS.js MAPS.js SLIDE_GROUPS.js SUMMARY.js PRINTCHEAT.js
          — each is the full statement that replaces the same statement in the template
          (GLOSSARY.js = the GLOSS_CATS line + the GLOSSARY statement).
    build/swaps.json  {title, h1, storeKey, notTestedHeading, notTestedHtml,
                       slideSearchPlaceholder, deckBreakRows}
    slides.json       per-slide text → the `slidedata` block

--replacements: a JSON list of [old, new] literal string pairs applied to the clone
(e.g. audience wording for a profile). Every `old` must be present or the build fails,
so a template change can't silently skip a swap.

Then run render_docs.py (doc-* blocks) and embed_images.py (imgdata) on the same dir.
The template's CSS, sprite, and engine code are carried over untouched.
"""
import argparse
import json
import re
import sys
from pathlib import Path

DEFAULT_TEMPLATE = (Path(__file__).resolve().parents[4]
                    / "courses/microbiology-biol2420/04-control-of-microorganisms/index.html")

# block file → (template anchor, is a function declaration)
BLOCKS = {
    "TOPICS": ("const TOPICS = {", False),
    "CARDS": ("const CARDS = [", False),
    "QUIZ": ("const QUIZ = [", False),
    "SCENARIOS": ("const SCENARIOS = [", False),
    "SLIDE_NOTES": ("const SLIDE_NOTES = {", False),
    "TESTCHIPS": ("document.getElementById('testChips').innerHTML = [", False),
    "MNEMONICS": ("const MNEMONICS=[", False),
    "MAPS": ("const MAPS = [", False),
    "SLIDE_GROUPS": ("const SLIDE_GROUPS=[", False),
    "SUMMARY": ("const SUMMARY=", False),
    "PRINTCHEAT": ("function printCheat(){", True),
}


def stmt_end(s: str, i: int, is_func: bool) -> int:
    """Index just past the JS statement starting at i: the closing brace of a function,
    otherwise the first `;` at bracket depth 0. Skips strings, comments, and template
    literals (including nested ${…})."""
    depth, seen, mode, tpl = 0, False, None, []
    j, n = i, len(s)
    while j < n:
        c = s[j]
        if mode:
            if c == "\\":
                j += 2
                continue
            if mode == "`" and s.startswith("${", j):
                tpl.append(depth)
                depth += 1
                mode = None
                j += 2
                continue
            if c == mode:
                mode = None
        elif s.startswith("//", j):
            j = s.find("\n", j)
            continue
        elif s.startswith("/*", j):
            j = s.find("*/", j) + 2
            continue
        elif c in "'\"`":
            mode = c
        elif c in "([{":
            depth += 1
            # A function ends at its body's closing brace, not its parameter list.
            seen = seen or c == "{" or not is_func
        elif c in ")]}":
            depth -= 1
            if tpl and depth == tpl[-1]:
                tpl.pop()
                mode = "`"
            elif is_func and seen and depth == 0:
                return j + 1
        elif c == ";" and depth == 0 and not is_func:
            return j + 1
        j += 1
    sys.exit(f"Unterminated statement starting at offset {i}")


def span(html: str, anchor: str, is_func: bool) -> tuple[int, int]:
    start = html.find(anchor)
    if start == -1 or html.find(anchor, start + 1) != -1:
        sys.exit(f"Template anchor must appear exactly once: {anchor!r}")
    return start, stmt_end(html, start, is_func)


def sub_once(html: str, pattern: str, repl, label: str, flags=re.DOTALL) -> str:
    new, count = re.subn(pattern, repl, html, count=1, flags=flags)
    if count != 1:
        sys.exit(f"Swap failed ({label}): pattern not found")
    return new


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("lecture_dir")
    ap.add_argument("--template", default=str(DEFAULT_TEMPLATE))
    ap.add_argument("--replacements")
    a = ap.parse_args()
    d = Path(a.lecture_dir)
    build = d / "build"
    html = Path(a.template).read_text(encoding="utf-8")

    for name, (anchor, is_func) in BLOCKS.items():
        code = (build / f"{name}.js").read_text(encoding="utf-8").strip()
        s, e = span(html, anchor, is_func)
        html = html[:s] + code + html[e:]
    # GLOSS_CATS + GLOSSARY are adjacent statements replaced by one file.
    s, _ = span(html, "const GLOSS_CATS=", False)
    _, e = span(html, "const GLOSSARY = [", False)
    html = html[:s] + (build / "GLOSSARY.js").read_text(encoding="utf-8").strip() + html[e:]

    sw = json.loads((build / "swaps.json").read_text(encoding="utf-8"))
    if not isinstance(sw["deckBreakRows"], str):
        sys.exit('swaps.json "deckBreakRows" must be one HTML string of <tr> rows')
    # Callable replacements keep swap text literal (no backslash/group expansion).
    html = sub_once(html, r"<title>.*?</title>",
                    lambda m: f"<title>{sw['title']} — Interactive Study</title>", "title")
    html = sub_once(html, r'(<div class="htitle">\s*<h1>).*?(</h1>)',
                    lambda m: m.group(1) + sw["h1"] + m.group(2), "h1")
    html = sub_once(html, r'(const Store = \{\s*key:")[^"]+(")',
                    lambda m: m.group(1) + sw["storeKey"] + m.group(2), "storeKey")
    html = sub_once(html, r'(<span class="tbadge off">.*?</span>) [^<]+</h3>\s*<p class="small muted">.*?</p>',
                    lambda m: f'{m.group(1)} {sw["notTestedHeading"]}</h3>\n    {sw["notTestedHtml"]}', "notTested")
    html = sub_once(html, r'(id="slideSearch" placeholder=")[^"]*(")',
                    lambda m: m.group(1) + sw["slideSearchPlaceholder"] + m.group(2), "slideSearch")
    html = sub_once(html, r'(<div id="deckBreak"[^>]*>\s*<table>).*?(</table>)',
                    lambda m: m.group(1) + "\n        " + sw["deckBreakRows"] + "\n      " + m.group(2), "deckBreak")
    slides = (d / "slides.json").read_text(encoding="utf-8").strip()
    html = sub_once(html, r'(<script id="slidedata" type="application/json">).*?(</script>)',
                    lambda m: m.group(1) + slides + m.group(2), "slidedata")

    if a.replacements:
        # [old, new] must match; [old, new, true] is optional (for text authored per lesson).
        for old, new, *optional in json.loads(Path(a.replacements).read_text(encoding="utf-8")):
            if old not in html and not optional:
                sys.exit(f"Replacement not found in template: {old!r}")
            html = html.replace(old, new)

    (d / "index.html").write_text(html, encoding="utf-8")
    print(f"assembled {d / 'index.html'} from {a.template}")


if __name__ == "__main__":
    main()
