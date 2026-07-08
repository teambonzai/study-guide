# Coverage Audit — MANDATORY GATE for every lecture

**Why this exists:** On the first build (`01-immune-response`) the transcript was read only
~60% of the way through, so the **entire final unit** — Immunization / Acquired Immunity /
Vaccines (~25% of the lecture) — was silently omitted, including **two topics the professor
explicitly said would be on the exam** (vaccine platforms; adjuvant). The slides alone looked
"complete." **The slides are not the whole lecture.** This audit exists so that can never happen
again. It is **not optional** and it is a **blocking gate**: the build is not done until the
audit passes.

## The two rules that caused the miss
1. **Read the ENTIRE transcript** — start to finish, in offset/limit chunks. Never stop early.
   Note the last line number and confirm you reached the professor's closing remarks
   (e.g. "that is the end of the material").
2. **Audit coverage independently** before declaring done — map every slide AND every transcript
   teaching point to the study materials, with a fresh pair of eyes (a subagent).

## When to run
Run **after Step 3 (author the study docs)** and BEFORE building the app data blocks — so any
gaps are folded into the docs first and then flow into `CARDS/QUIZ/SCENARIOS/GLOSSARY/MAPS`.
Run it **again as the final gate** (Step 7) after the app is assembled, to confirm nothing was
dropped. It reads the `.md` docs, so it does not need the app to exist for the first pass.

## Inputs the audit needs
- `slides.json` (all slide text from extract) — path from Step 1.
- The **full** transcript as plain text (the whole file, not a truncated copy).
- The authored `study-guide.md`, `lecture-outline.md`, `key-terms-glossary.md`.

## How to run — launch an independent subagent

Use the `Agent` tool (`general-purpose`) so the audit is done by fresh context, not the same
context that wrote the guide. Paste this prompt, filling the bracketed paths:

> You are doing a rigorous CONTENT-COVERAGE AUDIT for a nursing student's study guide. Verify that
> everything substantive in the SOURCE documents is covered in the STUDY MATERIALS. Report gaps
> precisely. Do NOT fix anything — audit and report only.
>
> SOURCES (ground truth):
> 1. PowerPoint slide text (all slides): `[slides.json path]` (JSON [{n,text}]; empty text =
>    image-only diagram).
> 2. Full lecture transcript (machine-generated, so terms are garbled — e.g. antigen, titer,
>    diapedesis, B lymphocyte are often mistranscribed): `[transcript txt path]`. **Read the ENTIRE
>    file in offset/limit chunks; it exceeds the single-read limit. Confirm you reached the end.**
>
> STUDY MATERIALS to check coverage against:
> - `[study-guide.md]` · `[lecture-outline.md]` · `[key-terms-glossary.md]`
>
> TASKS:
> A) SLIDE COVERAGE: for every text-bearing slide, is its substantive content in the materials?
>    Build a table: slide # → covered (yes/partial/no) → where, or "image-only/diagram". Flag any
>    slide whose text is not reflected.
> B) TRANSCRIPT COVERAGE: read the FULL transcript. List every substantive teaching point
>    (concepts, definitions, mechanisms, mnemonics, clinical examples tied to a concept, and
>    ANYTHING the professor says students must know / will be tested on). Mark each covered /
>    partial / missing. Ignore pure personal anecdotes unless they illustrate a testable concept.
> C) GAPS: a ranked list of anything in EITHER source missing or only partial in the materials,
>    ordered by importance, with **anything the professor flags as testable at the very top**.
>    Quote the source. If coverage is complete, say so explicitly.
> D) NOT-TESTED DRILL CHECK (only when the app `CARDS`/`QUIZ` blocks exist — the final-gate pass):
>    compile the deck's explicitly de-scoped topics (Overview "Not tested", the guide's exam-scope
>    not-tested flags, `SLIDE_NOTES` "not tested"/"reference-only" notes). Then scan every `CARDS`
>    and `QUIZ` item and flag any whose CORRECT ANSWER hinges on a de-scoped fact. Be conservative
>    (background the guide merely explains is fine; only a *tested* correct-answer is a violation).
>    List each violation to remove.
>
> Be thorough and skeptical — the point is to catch omissions. Return: (1) slide coverage table,
> (2) transcript teaching-point list, (3) ranked gap list, and a final verdict:
> **complete / minor gaps / significant gaps.**

## The gate (pass/fail)

**FAIL the gate — you MUST remediate and re-run — if ANY of these are true:**
- The verdict is "significant gaps", OR
- Any item the professor flagged as testable ("be sure you know…", "you'll see this on the exam",
  "know this image") is missing or partial, OR
- Any whole slide's text content is unaccounted for (and it is NOT a deliberate, correctly-flagged
  "not tested" item), OR
- Any `CARDS`/`QUIZ` item drills a de-scoped fact (task D) — remove it before passing.

**Remediation when it fails:**
1. Add the missing content to **every** file it belongs in: `study-guide.md` (new section +
   update the on-the-test/exam-scope list), `lecture-outline.md` (new ordered sections),
   `key-terms-glossary.md` (terms), and the app data (`TOPICS` if a new topic, `CARDS`, `QUIZ`,
   `SCENARIOS`, `GLOSSARY`, and a `MAPS` entry if it's a "favorite chart"-type concept).
2. Re-render docs and re-embed, then **re-run the audit** on the updated materials.
3. Repeat until the only remaining omissions are content the professor **explicitly** de-scoped
   (staining colors, numeric comparison charts, etc.), each **correctly flagged ⛔ not-tested**.

**PASS** = verdict "complete" (or "minor gaps" where every remaining gap is a deliberate,
correctly-flagged not-tested omission and no testable-flagged item is missing).

## Save the report — this is what makes the gate automatic

Write the audit result to **`coverage-audit.md` in the lecture folder** (next to `index.html`),
ending with a single line:

```
VERDICT: PASS
```

(or `VERDICT: FAIL` while gaps remain). **`scripts/register_class.py` reads this file and refuses
to publish the class unless it exists and says `PASS`/`COMPLETE`.** So the audit runs and passes
automatically as part of every build — there is no way to register/finish a lecture without it.
Record the verdict in your summary to the user too.
