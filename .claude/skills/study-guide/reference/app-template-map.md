# App template map — what to swap in `index.html`

The template is `courses/microbiology-biol2420/01-immune-response/index.html`
(~2600 lines). **Clone it, then replace ONLY the blocks below.** Everything else
— the `<style>`, the icon `<symbol>` sprite, and every JS function (`Tip` (JS
tooltip module), `LB` (multi-slide lightbox: `open`/`openSet`/`step`/`render`),
`Search`, `enhanceDoc`, `enhanceGloss`/`enhanceSlideRefs`/`slideList`/`glossPop`
(inline term & multi-slide linking in the Read docs), `loadDoc` (incl. the
tbadge→pill marker normalizer), `renderMnem`, `renderMapFilter`/`renderSlideGroups`
(dropdown filters), palette, hotkeys, the `makeMC` quiz engine
(auto-reveal-on-correct, `requeueMissed`, Back + `answers` memory, review-link `-fb`),
the Leitner flashcard engine (`Flash.prev`; question→answer only — no reverse
mode), settings (incl. `requeueMissed`), the `N` toggle hotkey, and the **router**:
`route`/`setHash`/`hashFor`/`scrollToSec`/`openGuide` +
`VIEWS`/`DOCS`/`_pending`/`_routing` + the `hashchange` listener + the boot
`route()` call) — is the shared design system + app engine and must stay
byte-for-byte identical. Cloning carries all of it forward automatically; never
strip it out.

Line numbers below are approximate (from the gold standard) — locate by the anchor
string, not the number, since your authored content changes lengths.

## 1. Title & header
- `<title>… — Interactive Study</title>` (~line 6) → new lecture short title.
- Header `<h1>… <use href="#i-<icon>"/> … Lecture Name</h1>` (~line 295) → new
  lecture name + a fitting sprite icon. Course name goes in the title icon's
  `data-tip`, never as a visible subtitle.

## 2. `slidedata` — per-slide text (`<script id="slidedata" type="application/json">`, ~line 622)
`[{"n": 1, "text": ""}, {"n": 2, "text": "Figure 14.1"}, …]` — the exact
per-slide text from python-pptx (empty string for image-only slides). Produced by
`scripts/extract.sh`. The app reads it as `const SLIDES` and uses it for the
Diagrams captions + search.

## 3. `imgdata` — embedded slide images (`<script id="imgdata" type="application/json">`, ~line 623)
`{"1": "data:image/jpeg;base64,…", "2": "…", …}` — base64 JPEG per slide.
Produced/spliced by `scripts/embed_images.py`. This is the large block (~5.7MB).
Read as `const IMG`; gallery + lightbox use `IMG[n]`.

## 4. Content consts (authored JS blocks — locate each by its `const NAME` anchor)
Author these for the new lecture. **Copy the exact shapes INCLUDING the trailing
`.map(...)` transform** where present — the engine reads the mapped object, not the
bare array. Getting the tail wrong silently breaks flashcard/quiz persistence.

- **`TOPICS`** — `{ "<key>": {name, color, icon}, … }`. `color` = a 600-level hex
  (see design-rules palette); `icon` = a sprite id without the `i-` prefix.
  Topic keys are referenced by cards/quiz/scenarios/maps — keep them consistent.
  (The gold standard has 13 topics.)
- **`CARDS`** — authored as `[ ["<topic-key>","question","answer"], … ]` followed by
  `].map((c,i)=>({id:i,t:c[0],q:c[1],a:c[2]}));`. **`id` (the array index) is the
  localStorage key** for Leitner boxes, trouble tracking, and Progress — keep the map.
- **`QUIZ`** — `[ ["question",["opt0","opt1","opt2","opt3"],correctIndex,"<topic-key>"], … ]`
  then `].map((x,i)=>({id:i,q:x[0],opts:x[1],correct:x[2],t:x[3]}));`.
- **`CARDS`/`QUIZ` scope:** author ONLY on-tested items. Never add a card or question
  whose correct answer hinges on material the professor de-scoped (reference-only
  numeric tables, staining colors, "context only" chemistry). Background the guide
  merely explains is fine; just don't *test* it. (Enforced by the coverage audit.)
- **`SCENARIOS`** — `[ ["stem",["opt…"],correctIndex,"rationale","<topic-key>"], … ]`
  then `].map((x,i)=>({id:i,q:x[0],opts:x[1],correct:x[2],rat:x[3],t:x[4]}));`.
  Clinical application is fine; call the tab "Scenarios," not "NCLEX-style".
- **`GLOSSARY`** — `[ ["Term","Definition.","<category-key>"], … ]` (no `.map`).
  Category keys group the list under headers (e.g. `"acr"` = acronyms). Term +
  def on their own lines; term bold.
- **`SLIDE_NOTES`** — `{ <slideNum>: {note:"…"}, <slideNum>: {star:true, note:"…"}, … }`.
  **Per-lecture — MUST be re-authored**, or the new deck ships the immune-response
  captions. Drives the Diagrams gallery notes, the lightbox note, search sub-text,
  and `star:true` = the "Key images only" filter (mark the exam-critical diagrams).
- **`testChips`** — the Overview "On the test" chips, authored as
  `document.getElementById('testChips').innerHTML = [ ["<keyword>","<label>"], … ]`.
  **Per-lecture.** Each `<keyword>` must uniquely match a study-guide **h2** —
  `openGuide()` deep-links to `#read/guide/<keyword>` and `scrollToSec` scrolls
  there (see design-rules "Cross-linking"/"Navigation"). Verify every chip resolves.
- **`MNEMONICS`** — `[ ["KEY","what it's for","<b>C</b>…expansion HTML","topic label"], … ]`.
  Tap-to-reveal cards. (Lives mid-engine next to `renderMnem()` — find by anchor.)
- **`MAPS`** — `[ {title, html:`…`}, … ]`. Built from helper fns already in the
  file: `n(color, label, subtitle)` = node, `down(label)` / `arrowR(label)` =
  labeled arrows, `icon('name')` = inline icon, `C` = the TOPICS map. **Every
  arrow must carry a label**; model decisions as top node → labeled arrow → two
  separated labeled columns.

## 5. Rendered doc bodies (`<script type="text/html" id="doc-*">`)
- `id="doc-outline"` (~line 1293) ← rendered `lecture-outline.md`
- `id="doc-guide"` (~line 1427) ← rendered `study-guide.md`
- `id="doc-transcript"` (~line 1928) ← rendered `transcript-corrections.md`

Produced by `scripts/render_docs.py` (markdown → HTML with the blank-line fix,
emoji→icon/pill stripping, and `Slide N`→`LB.open(n)` lightbox links). The app's
`loadDoc()` reads each block's `.textContent` into `innerHTML`, then `enhanceDoc`
classifies blockquotes into callouts and de-bolds prose.

## Routing (app engine — inherited by cloning, never rebuild)
The app is a single page with hash-based routing so every view/section has a
unique URL and Back/Forward/reload work. The hash is the source of truth:
- `#<view>` for the 9 views (`overview`, `read`, `flash`, `quiz`, `scenarios`,
  `maps`, `diagrams`, `glossary`, `progress`).
- `#read/<doc>` where `<doc>` ∈ `outline|guide|transcript`.
- `#read/guide/<section>` — deep link to a study-guide heading (the "On the test"
  chips use this via `openGuide()`; `scrollToSec` matches an h2, falling back to h1).

How it stays consistent (do not "simplify" this away): `goView()`/`loadDoc()`
call `setHash()` on user navigation; a `hashchange` from Back/Forward/reload calls
`route()`, which re-applies state under a `_routing` guard so applying the URL
never writes new history (that guard is what prevents Back from thrashing).
`_pending` counts programmatic hash writes so their own `hashchange` is ignored.
If you add a new view/section, add its id to `VIEWS`/`DOCS` — nothing else.

## What you do NOT touch
- The `<style>` block (design system).
- The `<svg>…<symbol>` sprite (add a new `<symbol>` only if a topic needs an icon
  the sprite lacks — copy a real Lucide path, keep `viewBox="0 0 24 24"`).
- Any `<script>` with app logic (functions/classes), including the router. Data
  in, logic unchanged.
- **`loadDoc()`'s runtime regex-cleanup chain** — beyond the build-time transforms
  in `render_docs.py`, `loadDoc` also strips `title=` attrs, deletes ", Austin
  Community College", maps `#i-checkc→#i-target` / `#i-xc→#i-ban`, drops
  `<p><em>…index.html…</em></p>` external-file footers, and rewrites
  `<code>study-guide.md</code>`→"Study guide" etc. It is the safety net that makes
  the built doc correct regardless of source quirks — keep it byte-for-byte, and
  never hand-edit the `doc-*` blocks (a rebuild from the `.md` overwrites them).
