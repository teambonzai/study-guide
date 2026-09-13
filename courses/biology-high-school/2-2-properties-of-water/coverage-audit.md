# Coverage Audit — 2.2 Properties of Water (re-audit after fixes, Macy rules 1–4)

**Sources opened:** `slides.json` (no speaker notes); rendered slides 2–9 re-viewed; prior audit's picture-label table re-checked against them.

**Materials checked:** `study-guide.md`, `lecture-outline.md`, `key-terms-glossary.md`, `transcript-corrections.md`, `flashcards.json`, `build/*.js` (all 12), `build/swaps.json`, plus string checks in the rebuilt `index.html` (it has the same timestamp as the edited sources).

## Prior must-fix items

| # | Item | Result |
|---|---|---|
| 1 | "water strider" removed | **Fixed.** No "strider" in any .md, .js, .json, or `index.html`. The §5 bullet is gone. SCENARIOS S1 now reads "A small bug stands on a pond without sinking. What holds it up?" |
| 2 | "dispersed" explanation | **Fixed.** §8: "One liquid is **dispersed** (spread out in tiny bits) in the other." The glossary keeps its labeled Outside source entry. |
| 3 | "not to scale" explanation | **Fixed.** §5: "The drawing says "Diagram not to scale." (The sizes are not real sizes.)" This is a short plain gloss of the teacher's words, and no extra claim was added. |
| 4 | Celery wording | **Fixed.** §3: "The strings in a celery stalk contain them." "bundles of them" is gone everywhere. |
| 5 | Lipids wording | **Fixed.** Guide §7: "**Lipids** include fats and oils." `key-terms-glossary.md` and `build/GLOSSARY.js`: "A group that includes fats and oils, like butter." The old wording is not in `index.html`. |

## 1. Coverage — PASS

Every slide's text and every picture label or number is still in the guide and the outline. Examples: 95.84 pm and 104.45°, all three model names, intramolecular polar covalent bonding, the Xylem wall chart, the meniscus and capillary tube, both surface-tension drawings (including "Diagram not to scale"), 390/910/4200 J/kg°C and the lower/higher boxes, Phospholipid Structure head/tail, and ρ = M / V with its labels. Removing the strider bullet cut no teacher content: the insect photo is still described.

## 2. No guessed scope — PASS

None of these words appear in any material: on the test, exam scope, optional, skip, memorize, background only, extra detail, core. The guide ends with the allowed line. `swaps.json` uses "From your teacher" and the allowed note.

## 3. No non-teacher content — PASS

- No added science terms.
- Every outside explanation starts with "Outside source:" and has a citation. That includes electron, pm, inter/intra, polar covalent bond, xylem, the capillary mechanism, external, bulk, homeostasis, J/kg°C, joule, kilogram, dissolve, cell membrane, bilayer, lipids, plasma, bile/emulsify, mass, volume, ρ, °C, "ad," and imbalance of forces.
- The only unlabeled glosses are short parentheticals that explain the teacher's own words ("dispersed," "not to scale," "regions (parts)"). Rule 3 allows these.
- Scenario settings (pond, celery in dye, pool, copper pot, sugar/oil, ice) are everyday situations. The audience rules ask for these, and every answer is a teacher concept.

## 4. Drills — PASS

- All 47 cards (same as `flashcards.json`), 19 quiz questions, and 6 scenarios have answers from the slides or slide pictures.
- Quiz stems are direct questions. No option is a flipped copy of the answer. Every scenario stem ends with a question.

## 5. Accuracy — PASS

The two earlier errors (celery, lipids) are fixed. No other factual errors were found.

## Minor (not verdict)

- QUIZ Q18 distractors "50°C" and "100°C" are not from the lesson. "1°C" (Slide 7) would follow the options rule.
- `build/SUMMARY.js` is missing a space: "95.84 picometers long.Your slide" (also in `index.html`).
- `key-terms-glossary.md` Xylem wall: "Outside source:" is not bold, unlike other rows. Its "like the strings in celery" is a loose comparison but not wrong.
- As noted before: some glossary definitions run over 15 words, and a few lesson words have no glossary entry (mixture, molecule, atom, nitrogen, fluorine, organisms).

## Must-fix

None.

VERDICT: PASS
