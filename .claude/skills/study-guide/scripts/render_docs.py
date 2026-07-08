#!/usr/bin/env python3
"""Render the lecture .md docs into the app's doc-* script blocks.

Usage:
    render_docs.py <lecture-dir>

Reads lecture-outline.md, study-guide.md, transcript-corrections.md from the
lecture dir and splices the rendered HTML into <script type="text/html"
id="doc-outline|doc-guide|doc-transcript"> in that dir's index.html.

Handles the project's doc-render rules (see reference/design-rules.md):
  - blank line before any list that follows a non-blank line (python-markdown gotcha)
  - Slide N  ->  clickable lightbox link (LB.open(n))
  - 🎯 / ⛔  ->  on-test / not-tested pill spans
  - strips stray emoji so none leak into the UI

Requires: pip3 install --user --break-system-packages markdown
"""
import re
import sys
from pathlib import Path

try:
    import markdown
except ImportError:
    sys.exit("Install markdown: pip3 install --user --break-system-packages markdown")

DOCS = {
    "lecture-outline.md": "doc-outline",
    "study-guide.md": "doc-guide",
    "transcript-corrections.md": "doc-transcript",
}

# Icon-only badges (no baked-in text) — the surrounding heading/sentence supplies
# the words; loadDoc() also normalizes these at render time. See design-rules "Badges".
ON_TEST = '<span class="tbadge on"><svg class="i"><use href="#i-check"/></svg></span>'
NOT_TESTED = '<span class="tbadge off"><svg class="i"><use href="#i-x"/></svg></span>'

# Emoji the user wants stripped from rendered docs (color dots / checks handled inline).
STRIP = "📷🔵🔴🟡❌✅★✓✔️➡️⬇️"


def preprocess(md: str) -> str:
    """Insert a blank line before any list run that follows a non-blank line."""
    out, lines = [], md.split("\n")
    for i, line in enumerate(lines):
        is_item = re.match(r"\s*([-*+]|\d+\.)\s+", line)
        prev = lines[i - 1] if i else ""
        prev_item = re.match(r"\s*([-*+]|\d+\.)\s+", prev)
        if is_item and prev.strip() and not prev_item:
            out.append("")
        out.append(line)
    return "\n".join(out)


def postprocess(html: str) -> str:
    html = html.replace("🎯", ON_TEST).replace("⛔", NOT_TESTED)
    # Slide N -> lightbox link (skip if already wrapped).
    html = re.sub(
        r"\bSlide (\d+)\b",
        r'<span class="slidelink" onclick="LB.open(\1)">Slide \1</span>',
        html,
    )
    for ch in STRIP:
        html = html.replace(ch, "")
    return html


def render(path: Path) -> str:
    md = markdown.Markdown(extensions=["tables", "sane_lists", "fenced_code"])
    return postprocess(md.convert(preprocess(path.read_text(encoding="utf-8"))))


def splice(index_html: str, block_id: str, body: str) -> str:
    pat = re.compile(
        r'(<script type="text/html" id="%s">).*?(</script>)' % re.escape(block_id),
        re.DOTALL,
    )
    if not pat.search(index_html):
        sys.exit(f"Block id={block_id} not found in index.html")
    return pat.sub(lambda m: m.group(1) + body + m.group(2), index_html, count=1)


def main() -> None:
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    d = Path(sys.argv[1])
    index = d / "index.html"
    html = index.read_text(encoding="utf-8")
    for fname, block_id in DOCS.items():
        f = d / fname
        if not f.exists():
            print(f"skip {fname} (missing)")
            continue
        html = splice(html, block_id, render(f))
        print(f"rendered {fname} -> {block_id}")
    index.write_text(html, encoding="utf-8")
    print(f"updated {index}")


if __name__ == "__main__":
    main()
