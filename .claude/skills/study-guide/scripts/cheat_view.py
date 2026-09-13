#!/usr/bin/env python3
"""Make an app's cheat sheet viewable in the app instead of only through a print pop-up.

Usage:
    cheat_view.py <index.html> [<index.html> …]     # patch built apps in place

The original printCheat() opened a blank window and printed it. Pop-up blockers, phones, and
embedded previews stop that, so the sheet was unreachable. This swaps the pop-up for an in-app
modal that shows the same HTML in an iframe, with a Print button inside for anyone who wants paper.
assemble_app.py applies it to every build; running it again on a patched file changes nothing.
"""
import sys
from pathlib import Path

POPUP_OPEN = "const w=window.open('','_blank');"
POPUP_PRINT = "w.document.write(html); w.document.close(); w.focus(); setTimeout(()=>w.print(),350);"

CSS = """  .modal .sheet.cheat{max-width:900px;height:88vh;display:flex;flex-direction:column}
  #cheatFrame{flex:1;width:100%;border:0;border-radius:10px;background:#fff;margin-top:10px}
"""

MODAL = """<div class="modal" id="cheatModal" onclick="if(event.target===this)closeModal('cheatModal')">
  <div class="sheet cheat">
    <div class="modal-head"><h2><svg class="i"><use href="#i-doc"/></svg>Cheat sheet</h2><div class="spacer"></div><button class="btn" onclick="printCheatFrame()"><svg class="i"><use href="#i-printer"/></svg>Print</button><button class="iconbtn mh-x" onclick="closeModal('cheatModal')"><svg class="i"><use href="#i-x"/></svg></button></div>
    <iframe id="cheatFrame" title="Cheat sheet"></iframe>
  </div>
</div>
"""

JS = """function showCheat(html){ document.getElementById('cheatFrame').srcdoc=html; openModal('cheatModal'); }
function printCheatFrame(){ const w=document.getElementById('cheatFrame').contentWindow; w.focus(); w.print(); }
"""


def add_cheat_view(html: str) -> str:
    # A lesson's own printCheat() still carries the pop-up code even when the template it was
    # swapped into already has the viewer, so always convert the pop-up first.
    html = html.replace(POPUP_OPEN, "", 1).replace(POPUP_PRINT, "showCheat(html);", 1)
    if 'id="cheatModal"' in html:
        return html
    for needle in ("showCheat(html);", "function printCheat(){", '<div class="modal" id="settingsModal"', "</style>"):
        if html.count(needle) < 1:
            sys.exit(f"cheat_view: expected template code not found: {needle!r}")
    html = html.replace("function printCheat(){", JS + "function printCheat(){", 1)
    html = html.replace('<div class="modal" id="settingsModal"', MODAL + '<div class="modal" id="settingsModal"', 1)
    html = html.replace("</style>", CSS + "</style>", 1)  # first </style> is the app's own stylesheet
    html = html.replace('<use href="#i-printer"/></svg>Print 1-page cheat sheet</button>',
                        '<use href="#i-doc"/></svg>View cheat sheet</button>')
    return html.replace("{title:'Print 1-page cheat sheet',ic:'printer',", "{title:'View cheat sheet',ic:'doc',")


if __name__ == "__main__":
    for p in map(Path, sys.argv[1:]):
        before = p.read_text(encoding="utf-8")
        after = add_cheat_view(before)
        p.write_text(after, encoding="utf-8")
        print(f"{'patched' if after != before else 'already patched'}: {p}")
