#!/usr/bin/env bash
# Extract slide images + per-slide text from a lecture deck.
#
# Usage:  extract.sh <deck.ppt|.pptx|.pdf> <lecture-dir>
#   Produces:
#     <lecture-dir>/assets/slides/slide-NN.png
#     <lecture-dir>/slides.json          (-> the app's `slidedata` block)
#
# macOS toolchain: soffice (LibreOffice), poppler (pdftoppm/pdfinfo), python-pptx.
set -euo pipefail

DECK="${1:?usage: extract.sh <deck> <lecture-dir>}"
OUT="${2:?usage: extract.sh <deck> <lecture-dir>}"
SLIDES="$OUT/assets/slides"
mkdir -p "$SLIDES"

SOFFICE="${SOFFICE:-/opt/homebrew/bin/soffice}"
ext="${DECK##*.}"; ext="$(echo "$ext" | tr '[:upper:]' '[:lower:]')"

# 1. Get a PDF to render from.
PDF=""
case "$ext" in
  pdf)  PDF="$DECK" ;;
  ppt|pptx)
    echo "Converting $ext -> pdf with soffice…"
    "$SOFFICE" --headless --convert-to pdf --outdir "$OUT" "$DECK"
    PDF="$OUT/$(basename "${DECK%.*}").pdf"
    ;;
  *) echo "Unsupported deck type: .$ext" >&2; exit 1 ;;
esac

# 2. Render pages -> slide-01.png … (zero-padded to width of page count).
echo "Rendering slides -> $SLIDES"
pdftoppm -png -r 90 "$PDF" "$SLIDES/slide"
# pdftoppm names slide-1.png … slide-60.png; renormalize to zero-padded slide-NN.
python3 - "$SLIDES" <<'PY'
import os, re, sys
d = sys.argv[1]
files = [f for f in os.listdir(d) if re.match(r'slide-\d+\.png$', f)]
n = max(int(re.search(r'\d+', f).group()) for f in files)
w = max(2, len(str(n)))
for f in files:
    num = int(re.search(r'\d+', f).group())
    new = f"slide-{num:0{w}d}.png"
    if new != f:
        os.replace(os.path.join(d, f), os.path.join(d, new))
print(f"{len(files)} slides normalized to {w}-digit names")
PY

# 3. Extract exact per-slide text (ground truth for captions) from the ORIGINAL deck.
#    Only .pptx works with python-pptx; for legacy .ppt convert a pptx copy first.
PPTX="$DECK"
if [ "$ext" = "ppt" ]; then
  echo "Converting .ppt -> .pptx for text extraction…"
  "$SOFFICE" --headless --convert-to pptx --outdir "$OUT" "$DECK" >/dev/null
  PPTX="$OUT/$(basename "${DECK%.*}").pptx"
fi
if [ "$ext" = "pdf" ]; then
  echo "PDF input: writing empty slides.json (fill text from the rendered images)."
  python3 - "$PDF" "$OUT/slides.json" <<'PY'
import json, sys, subprocess
pages = int(subprocess.run(["pdfinfo", sys.argv[1]], capture_output=True, text=True)
            .stdout.split("Pages:")[1].split()[0])
json.dump([{"n": i, "text": ""} for i in range(1, pages + 1)],
          open(sys.argv[2], "w"), ensure_ascii=False)
print(f"{pages} slides")
PY
else
  python3 - "$PPTX" "$OUT/slides.json" <<'PY'
import json, sys
from pptx import Presentation
prs = Presentation(sys.argv[1])
out = []
for i, slide in enumerate(prs.slides, 1):
    parts = []
    for sh in slide.shapes:
        if sh.has_text_frame and sh.text_frame.text.strip():
            parts.append(sh.text_frame.text.strip())
    out.append({"n": i, "text": "\n\n".join(parts)})
json.dump(out, open(sys.argv[2], "w"), ensure_ascii=False)
print(f"{len(out)} slides of text -> {sys.argv[2]}")
PY
fi

echo "Done. Review the image-only slides (montage) before authoring."
