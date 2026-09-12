# Coverage Audit — 2.2 Properties of Water (final gate re-audit, Macy rewrite)

**Sources checked:** `slides.json`; `assets/slides/slide-01.png` … `slide-09.png` (all 9 opened). There is no recording and there are no speaker notes.

**Materials checked:** `study-guide.md`, `lecture-outline.md`, `key-terms-glossary.md`, `transcript-corrections.md`, `flashcards.json`, `build/*.js` (CARDS, GLOSSARY, MAPS, MNEMONICS, PRINTCHEAT, QUIZ, SCENARIOS, SLIDE_GROUPS, SLIDE_NOTES, SUMMARY, TESTCHIPS, TOPICS), `build/swaps.json`.

**Rules:** `.claude/skills/study-guide/reference/audience-macy.md`.

## (A) Coverage — PASS

| Slide | Core idea | Guide | Outline |
|---|---|---|---|
| 1 | Title, Unit Two: Biomolecules | Header | Yes (⛔ decoration) |
| 2 | Water is polar. H is partial +, O is partial −. Electrons pulled to O | §1 | Yes |
| 3 | H-bond is an intermolecular force: H on one molecule to O on another. Other molecules too. N, O, F. Picture: intramolecular polar covalent bond | §2 | Yes |
| 4 | Cohesion and adhesion, "Co"/"Ad" hook, plant-wall picture | §3 | Yes |
| 5 | Capillary action in a thin tube, caused by cohesion + adhesion. Meniscus, tube-width photo | §4 | Yes |
| 6 | Surface tension resists an outside force, caused by cohesion. Surface vs. inner molecule pull, water strider | §5 | Yes |
| 7 | Specific heat definition. Resists fast temperature change, steadies climate and body temperature, homeostasis | §6 | Yes |
| 8 | Amphipathic (membranes, water + lipids, soap bubbles), hydrophobic (oils, fats), hydrophilic (salts, sugars), phospholipid picture | §7 | Yes |
| 9 | Suspension, emulsion (with slide examples). Density D = m/V, most dense at 4°C, ice floats | §8, §9 | Yes |

Nothing on the slides is missing.

## (B) Accuracy — PASS

- Everything I checked matches the slides. The simplifications are right for this level.
- Outside facts are cited: xylem, plasma, bile, and pond ice/fish all cite OpenStax Biology 2e. In the source notes, "ad" = "to" cites Merriam-Webster, and suspensions settling cites OpenStax Chemistry 2e.
- The source notes correctly fix three slide lines: "of water" in the specific-heat definition, "ad = between", and suspended particles "float".
- "The thinner the tube, the higher the water climbs" is shown in the Slide 5 photo and is correct.
- "Cohesion **only**" for surface tension adds emphasis to the slide's "caused by cohesion". It is a fair contrast with capillary action.
- The celery scenario credits cohesion + adhesion. Transpiration also helps in real plants, but the answer is the best choice given and matches the lesson.

## (C) ⛔ dependence — PASS

The ⛔ items are: Slide 2 angle/length numbers, Slide 2 model names, Slide 7 exact heat numbers, and Slide 1 decoration. No CARDS, QUIZ, or SCENARIOS answer needs any of them. MAPS #3 names copper and aluminum as "low" without numbers, and it is not a drill.

## (D) Readability — PASS

- **Study guide:** a script checked every sentence, and none is over 20 words. Every section is 120 words or less (the longest is §9 at 112). Each section has at most one callout, and the §7 table has 3 columns and 3 rows. Each jargon word gets a plain meaning right next to it: electrons, intermolecular force, xylem, meniscus, homeostasis, lipids, cell membranes, phospholipid, plasma, bile, mass/volume, and ρ.
- **Quiz (13 questions):** every stem is one short clear question. No option is "all/none of the above". The correct answers are correct.
  - Q2 "Between two molecules" / "Inside one molecule" and Q5 "Cohesion and adhesion" / "Cohesion only" are close pairs. Each pair *is* the idea the guide teaches, so the pair helps rather than confuses (see polish).
  - Q9/Q10 use hydrophilic/hydrophobic/amphipathic as options. The quiz can't avoid that, since these are the terms being tested.
- **Scenarios (5):** every stem asks a clear question. S1, S3, S4, and S5 are 2 sentences. **S2 is 3 sentences** (each very short, see polish). Every rationale is 2 short sentences and names the idea.
- **Flashcards (25):** each answer is 1–6 words. They go from "what is" to "which/why". `flashcards.json` matches `CARDS.js`.
- **Glossary (25 entries):** every definition is 15 words or less.
- **SLIDE_NOTES:** each is 20 words or less. **SUMMARY** is about 180 words in short sentences. **Mnemonics:** 3. **Maps:** 3, each with 6 nodes or fewer and every arrow labeled.

## (E) Wording and titles — PASS

- There is no "professor", clinical, patient, or nursing wording anywhere. "Teacher" is used throughout.
- "2.2" is in the titles of the study guide, outline, glossary, source notes, `swaps.json`, the `index.html` `<title>`, the cheat-sheet title, and the flashcards meta.

## Must-fix

None.

## Minor polish (optional, does not affect verdict)

1. `build/SCENARIOS.js` S2: the stem "You put celery in dyed water. The next day, the dye is at the top. What moved the water up?" has 3 sentences, and the limit is 2. Suggested fix: "You put celery in dyed water, and the dye climbs to the top. What moved the water up?" Make the same change in `index.html` if it has its own copy.
2. `build/CARDS.js` / `flashcards.json` card 1: the answer "One end negative, one end positive" could say "partly", like the glossary does. Suggested fix: "One end partly negative, one partly positive".
3. `build/QUIZ.js` Q2: to avoid a strict "simple opposites" reading, the option "Inside one molecule" could be "Inside one oxygen atom". Current wording is fine as is.
4. Specific heat definition (guide §6, glossary, card 15): "energy to raise the temperature by 1°C" leaves out "for a set amount (per gram)". It matches the slide and is fine at this level.

VERDICT: PASS
