---
name: study-guide
description: >-
  Turn a lecture (PowerPoint/PDF + transcript) into a full interactive study
  package that matches the gold-standard first class exactly. Use when the user
  drops lecture materials into src/ and asks to "build a study guide", "add a
  lecture", "add a class", "make a guide for <topic>", or process a new deck.
  Produces the md docs, flashcards.json, and a single self-contained index.html
  app, then registers it in the course README and landing page.
---

# Study Guide Builder

Repeatable process for converting one lecture into the full study package used in
this repo. **The gold standard is
`courses/microbiology-biol2420/01-immune-response/`** — every new lecture must
match its file set, structure, design, and behavior. When in doubt, open that
lecture's files and copy the pattern exactly. Do not invent a new design.

## Non-negotiables (read these first)

- **Read the ENTIRE transcript, then AUDIT coverage — this is a hard gate.** The slides are
  NOT the whole lecture. Read the transcript start to finish (chunked) and confirm you reached
  the professor's closing remarks. Before calling the build done, run the **mandatory coverage
  audit** (`reference/coverage-audit.md`) with an independent subagent that maps every slide AND
  every transcript teaching point to the materials. If it finds any missing testable content, you
  MUST add it and re-run until it passes. This step is not optional and applies to **every**
  lecture. *(The first build silently dropped ~25% of the lecture — the whole vaccines unit,
  including two exam-flagged topics — because the transcript wasn't fully read and not audited.)*
- **Content comes ONLY from the lecture** (deck + transcript). Anything from an
  outside source must be cited inline (reputable sources only). No filler, no
  invented sections, no editorializing. See `reference/design-rules.md`.
- **Flag what's on the test vs. not tested.** This is the highest-value part of
  the guide — the ACC professors narrow scope explicitly ("I only test what I
  discussed"). Green pill = on the test, red pill = not tested.
- **Flag machine-transcript errors** in `transcript-corrections.md` (auto-captions
  mangle technical terms: "anagen"→antigen, "tighter"→titer, "diabetes"→diapedesis).
- **The app is ONE self-contained `index.html`** — all images embedded as base64
  so it works offline via double-click and can be shared as a single file.
- **Design = teal, light mode, no gradients, real inline-SVG icons, no emoji.**
  The complete rule set is in `reference/design-rules.md`. Follow all of it.

## Inputs and outputs

**Input:** raw files in `src/` — a `.ppt`/`.pptx`/`.pdf` deck, a transcript
(`.rtf`/`.txt`/`.vtt`), and optionally a YouTube `.webloc`.

**Output:** `courses/<course-id>/NN-<topic>/` containing:

```
source-materials/          # the original files, moved from src/ untouched
assets/slides/             # slide-01.png … rendered slide images
study-guide.md             # main plain-language visual guide (slide refs, on-test flags)
lecture-outline.md         # sequential outline in teaching order
key-terms-glossary.md      # grouped, term + definition
transcript-corrections.md  # machine-transcript error flags
flashcards.json            # portable Q/A (Anki/Quizlet importable)
index.html                 # the interactive app — single self-contained file
```

## Workflow

Work through these in order. `reference/build-pipeline.md` has the exact commands;
`reference/app-template-map.md` maps every block in the template `index.html`.

### 1. Scaffold + extract
- Pick `<course-id>` (e.g. `microbiology-biol2420`) and the next `NN-<topic>`
  (zero-padded, teaching order). If it's a brand-new course, also create
  `courses/<course-id>/README.md` from the existing course README pattern.
- Move the `src/` originals into `.../source-materials/`.
- Run `scripts/extract.sh` to convert the deck to slide images
  (`assets/slides/slide-NN.png`) and pull per-slide text to `slides.json`.
- Convert the transcript to plain text (`textutil`/read the `.rtf`). Large
  transcripts exceed the Read limit — read in offset/limit chunks. **Read ALL of
  it, start to finish** — do not stop partway. Confirm you reached the closing
  remarks (e.g. "that is the end of the material"). Note the final line number.

### 2. Review the visuals (do not skip)
- A large share of these decks is **picture-only slides** that matter for a
  visual learner. `montage` the image-only slides and actually LOOK at them; note
  which are key diagrams. Read image-only slides with the Read tool.

### 3. Author the study docs
- Write `study-guide.md`, `lecture-outline.md`, `key-terms-glossary.md`,
  `transcript-corrections.md`, `flashcards.json` — mirror the structure, headings,
  callout style (`> Slide N …`, analogy/why/quote blockquotes), on-test flags
  (🎯 / ⛔ in the .md, converted to pills at build), and `Slide N` cross-refs of
  the gold-standard docs. Match their voice: plain, lean, functional headings.
- Keep the same `flashcards.json` shape: `meta` (course/lecture/source/topics) +
  `cards[]` of `{t, q, a}` where `t` is a topic key.

### 4. Coverage audit — MANDATORY GATE (do NOT skip)
- Run the audit in `reference/coverage-audit.md`: launch an **independent subagent** that maps
  **every slide** and **every transcript teaching point** to the docs you just wrote, and returns
  a ranked gap list + a verdict (complete / minor / significant gaps).
- **This is a blocking gate.** If it finds any missing/partial content — especially anything the
  professor flagged as testable — you MUST add it to `study-guide.md`, `lecture-outline.md`,
  `key-terms-glossary.md`, and (in later steps) the app data, then **re-run the audit** until it
  passes. Only deliberate, correctly-flagged ⛔ not-tested omissions may remain.
- **Save the audit result** to `coverage-audit.md` in the lecture folder, ending with a
  `VERDICT: PASS` line. **Registration (Step 7) automatically refuses to publish the class
  without this file saying PASS** — so the audit can't be skipped.
- Do not proceed to build app data from incomplete docs. Fold gaps in here first.

### 5. Build the app content blocks
- The app data lives in JS consts in `index.html`. Author, per this lecture:
  `TOPICS` (color+icon per topic — use the 600-level palette in the rules),
  `CARDS`, `QUIZ`, `SCENARIOS`, `GLOSSARY`, `SLIDE_NOTES` (gallery captions +
  `star` key-image flags), `testChips` (Overview "On the test" chips — each
  keyword must match a study-guide h2), `MNEMONICS`, `MAPS`. Copy the exact
  shapes — INCLUDING each block's trailing `.map(…→{id})` — from the template;
  see `reference/app-template-map.md`. Do NOT change the app engine (incl. the
  hash router) — cloning carries it forward; you only swap data.

### 6. Assemble index.html
- **Clone the template**: copy the gold-standard `index.html` to the new folder.
  Keep ALL of its CSS, icon sprite, and JavaScript byte-for-byte — that code is
  the design system and app engine; only the *data* changes.
- Replace, in the clone: `<title>`, the header `<h1>`, the `TOPICS…MAPS` consts,
  the `slidedata` JSON, the three `doc-*` script bodies, and the `imgdata` JSON.
- Run `scripts/render_docs.py` to convert the four `.md` docs to the HTML that
  goes in `doc-outline` / `doc-guide` / `doc-transcript` (handles the blank-line-
  before-lists gotcha, emoji→icon/pill stripping, and `Slide N`→lightbox links).
- Run `scripts/embed_images.py` to build the `imgdata` base64-**JPEG** map from
  `assets/slides/` and splice it into the `<script id="imgdata">` block. (JPEG,
  not PNG — the gold standard is 5.7MB; PNG would be far larger.)

### 7. Register it
- Run `scripts/register_class.py` (or edit by hand) to add the lecture row to
  `courses/<course-id>/README.md`, a card to the root `index.html` landing page,
  and the course line to the root `README.md`. Match the existing markup exactly.

### 8. Verify in the browser + final coverage re-check
- Start the `study-app` preview server (serves repo root on :8790) and open
  `/courses/<course-id>/NN-<topic>/`. Check every tab renders, the slide gallery
  shows images (embedding worked), `Slide N` links open the lightbox, quiz/glossary/
  concept-map toggles work, and there are no console errors. Fix in source, re-verify.
- **Re-run the coverage audit (Step 4) one final time** against the finished materials to confirm
  nothing was dropped between docs and app data. It must return PASS. State the verdict to the user.

## Reference files
- `reference/coverage-audit.md` — **the mandatory coverage-audit gate** (Step 4 + final
  re-check). Read and run for EVERY lecture; the build is not done until it passes.
- `reference/design-rules.md` — the complete, non-negotiable design + content
  rules (7 rounds of the user's approved refinements). Read before authoring UI.
- `reference/build-pipeline.md` — extraction toolchain, exact commands, gotchas.
- `reference/app-template-map.md` — line-map of the template `index.html`: every
  data block, doc script, and swap point, with the data shapes.
- `scripts/` — `extract.sh`, `render_docs.py`, `embed_images.py`, `register_class.py`.

## Checklist before calling it done
- [ ] **Entire transcript read start-to-finish** (reached the closing remarks).
- [ ] **Coverage audit (`reference/coverage-audit.md`) run and PASSED** — every slide + every
      transcript teaching point accounted for; no professor-flagged-testable content missing.
      *(This is a blocking gate — do not check it unless the audit genuinely passed.)*
- [ ] All content traces to the lecture; outside facts cited.
- [ ] On-the-test / not-tested flags present and correct.
- [ ] Transcript errors flagged.
- [ ] File set complete and matches the gold-standard names/shapes.
- [ ] `index.html` is self-contained (images embedded), opens offline, no emoji.
- [ ] Design matches `reference/design-rules.md` (teal, no gradients, sprite icons).
- [ ] Registered in course README + root landing page + root README.
- [ ] Verified in the browser — every tab, no console errors.
