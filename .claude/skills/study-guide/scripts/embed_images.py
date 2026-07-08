#!/usr/bin/env python3
"""Embed slide images into the app as a base64-JPEG map.

Usage:
    embed_images.py <lecture-dir> [--quality 72] [--max-width 1400]

Reads <lecture-dir>/assets/slides/slide-NN.png, re-encodes each to JPEG (keeps
the single index.html shareable — PNG would balloon it), and splices the map
into <script id="imgdata" type="application/json"> in <lecture-dir>/index.html.

The app reads it as `const IMG = JSON.parse(...)` and the gallery/lightbox use
IMG[n]. Embedding is REQUIRED: file:// and the preview panel do not serve sibling
assets/ files, so a gallery pointing at assets/ appears broken.

Requires: pip3 install --user --break-system-packages pillow
"""
import argparse
import base64
import io
import json
import re
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    sys.exit("Install pillow: pip3 install --user --break-system-packages pillow")


def encode(path: Path, quality: int, max_width: int) -> str:
    im = Image.open(path).convert("RGB")
    if im.width > max_width:
        h = round(im.height * max_width / im.width)
        im = im.resize((max_width, h), Image.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, format="JPEG", quality=quality, optimize=True)
    return "data:image/jpeg;base64," + base64.b64encode(buf.getvalue()).decode()


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("lecture_dir")
    ap.add_argument("--quality", type=int, default=72)
    ap.add_argument("--max-width", type=int, default=1400)
    args = ap.parse_args()

    d = Path(args.lecture_dir)
    slides = sorted((d / "assets" / "slides").glob("slide-*.png"),
                    key=lambda p: int(re.search(r"\d+", p.stem).group()))
    if not slides:
        sys.exit(f"No slide-*.png in {d/'assets'/'slides'}")

    img_map = {}
    for p in slides:
        n = int(re.search(r"\d+", p.stem).group())
        img_map[str(n)] = encode(p, args.quality, args.max_width)
        print(f"  slide {n:>3}  {len(img_map[str(n)])//1024} KB")

    payload = json.dumps(img_map, ensure_ascii=False)
    index = d / "index.html"
    html = index.read_text(encoding="utf-8")
    pat = re.compile(
        r'(<script id="imgdata" type="application/json">).*?(</script>)', re.DOTALL
    )
    if not pat.search(html):
        sys.exit('Block <script id="imgdata"> not found in index.html')
    html = pat.sub(lambda m: m.group(1) + payload + m.group(2), html, count=1)
    index.write_text(html, encoding="utf-8")

    total = sum(len(v) for v in img_map.values()) / 1_048_576
    print(f"Embedded {len(img_map)} slides (~{total:.1f} MB base64) -> {index}")


if __name__ == "__main__":
    main()
