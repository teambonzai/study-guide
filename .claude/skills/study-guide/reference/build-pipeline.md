# Build pipeline — toolchain, commands, gotchas

All tools confirmed available on this macOS machine. No `timeout`, no
`libreoffice`/`catppt` binaries — use `soffice`. zsh does NOT word-split unquoted
vars; pass file lists literally, not via `$VAR`.

## Extraction (`scripts/extract.sh`)

Converts the deck to slide images + per-slide text. Wraps:

- **`soffice`** (LibreOffice, `/opt/homebrew/bin/soffice`) — old binary `.ppt` →
  pdf: `soffice --headless --convert-to pdf --outdir OUT "file.ppt"`
  (also `--convert-to pptx`). `.pptx`/`.pdf` inputs skip or adjust this step.
- **`pdftoppm`/`pdfinfo`** (poppler) — pdf pages → PNG:
  `pdftoppm -png -r 90 file.pdf slide` → `slide-01.png …`. `pdfinfo` for page count.
- **python-pptx** (`pip3 install --user --break-system-packages python-pptx`) —
  extract exact per-slide text (ground truth for captions) → `slides.json`
  as `[{"n": 1, "text": "..."}, …]`. This becomes the `slidedata` block.

## Transcript

- **`textutil`** (built-in): `textutil -convert txt -stdout file.rtf`.
- YouTube `.webloc` files are plists — URL is in the `<string>` under `URL`.
- Large transcripts exceed the Read tool's 25k-token limit — read in offset/limit
  chunks. Flag caption errors in `transcript-corrections.md`.

## Reviewing visuals

- **`montage`/`magick`** (ImageMagick) — grid montages to eyeball many slides:
  `montage assets/slides/slide-*.png -tile 5x -geometry 300x+4+4 montage.png`.
  Pass file lists literally (zsh). Then Read the montage / individual image-only
  slides — a big share of these decks is picture-only slides that matter.

## Rendering docs into the app (`scripts/render_docs.py`)

- **python-markdown** (`pip3 install --user --break-system-packages markdown`),
  extensions `tables, sane_lists, fenced_code`.
- **Gotcha**: python-markdown won't parse a list that immediately follows a
  non-blank line — the script inserts a blank line before each list run first, or
  bullets render as literal dashes.
- The script also: strips emoji → icons/pills (see design-rules), converts
  `\bSlide (\d+)\b` → `<span class="slidelink" onclick="LB.open(N)">Slide N</span>`,
  and converts 🎯/⛔ → on-test/not-tested pill spans.
- Output HTML goes into the template's `<script type="text/html" id="doc-*">`
  blocks: `doc-outline` (from lecture-outline.md), `doc-guide` (study-guide.md),
  `doc-transcript` (transcript-corrections.md). Read via `.textContent` → `innerHTML`.

## Embedding images (`scripts/embed_images.py`)

- Builds a JSON map `{ "1": "data:image/jpeg;base64,…", … }` from
  `assets/slides/slide-NN.png`, re-encoding to **JPEG** (quality ~72) to keep the
  file shareable, and splices it into `<script id="imgdata" type="application/json">`.
- The app reads it as `const IMG = JSON.parse(document.getElementById('imgdata').textContent)`
  and the gallery / lightbox use `IMG[n]`. This is what makes the one-file app work
  offline (sibling `assets/` files are NOT served over `file://`).

## Assembling index.html

Do NOT regenerate the app from scratch. **Clone the gold-standard `index.html`**
and replace only the data. Swap points are mapped in `app-template-map.md`:
`<title>`, header `<h1>`, `TOPICS…MAPS` consts, `slidedata`, `doc-*` bodies,
`imgdata`. Keep all CSS, the icon sprite, and every JS function byte-for-byte.

## Preview

`.claude/launch.json` has a `study-app` config (`python3 -m http.server 8790`
serving repo root). Use the preview tools: start `study-app`, open
`/courses/<course-id>/NN-<topic>/`, verify every tab + no console errors.
