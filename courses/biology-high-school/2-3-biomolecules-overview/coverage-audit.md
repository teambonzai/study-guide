# 2.3 Biomolecules Overview — Coverage Audit (re-check after fixes)

**Date:** 2026-09-13
**Teacher sources checked:** slides.json; speaker notes read from the .pptx with python-pptx (notes exist only on slides 4–9); rendered slides 1–10 and 12–29; full-size pictures s24-1 (enzyme chart) and s28-1 (DNA vs. RNA). Slide 11 is hidden and left uncited on purpose. For slides 3–5, only what shows on the rendered slide counts. There is no recording.
**Materials checked:** study-guide.md, lecture-outline.md, key-terms-glossary.md, transcript-corrections.md, flashcards.json, build/*.js, build/swaps.json. I also grepped index.html to confirm the built app has the fixes.
**Rules:** reference/audience-macy.md (hard rules 1–4, plus the section rules).

---

## Prior must-fix items

1. **SLIDE_NOTES.js star flags: FIXED.** No `star` remains in build/SLIDE_NOTES.js or index.html. All 28 entries are `{note:"…"}`.
2. **PRINTCHEAT.js Slide 7 note: FIXED.** The words match the speaker note exactly: "We will talk more about the 'activation energy' concept in a future unit, for now we are just focusing on the exo/endo thermic ideas (energy releasing/absorbing)". The only change is that the inner double quotes became single quotes, as usual when nesting a quote. It is attributed as "Teacher's note (Slide 7)". The guide, outline and swaps.json carry the same quote.
3. **Slide 28 "single nucleobase": FIXED.** study-guide.md §11 says: "The Slide 28 picture also shows the label **single nucleobase**." lecture-outline.md §11 says: `Slide 28 picture label: "single nucleobase."` Neither adds an interpretation. The label is confirmed on s28-1 and on rendered slide 28.
4. **QUIZ Q7 flipped option: FIXED.** The options are now "Exothermic" / "Melting ice" / "Dehydration synthesis". None is a prefix swap. index.html has the new options.

## 1. Coverage

- **Speaker notes (slides 4–9):** every point is in the guide, with a short version in the outline. That covers chemical vs. physical change, the misconception, ice/boiling/splitting water, coefficient, state letters, exo/endo, spontaneous, the "potential energy diagrams" name, product vs. reactant level, the Slide 7 quote, anabolism/catabolism, dehydration synthesis, hydrolysis, and starch → glucose.
- **Slide text:** all visible text on slides 1–10 and 12–29 is covered. All 12 discussion and BONUS prompts are quoted word for word.
- **Picture labels:** checked against every rendered slide. All are covered: polymerization; (a)/(b)/(c); the energy chart (10 kinds, with electrical on both sides); the cannon labels and caption; low/high entropy with highly ordered/more disordered; reactants/products; the red X; heat released/absorbed with hotter/cooler than surroundings; potential energy; reaction coordinate/progress; energy released/absorbed; activation energy; the anabolic/catabolic captions; OH + H → H₂O; digestion; the ATP parts; ATP/ADP/inorganic phosphate/energy/H₂O; charged/dead battery; requires/releases energy; the Slide 14 and 16 lipid labels; glycerol/carbon chain/fatty acids; the structure of glucose; mono/di/polysaccharide; glucose "gets converted to" ATP/energy; N-/C-terminus, peptide bond, amino acids, Leu/Phe/Ser/Cys; amine/carboxyl/variable (R) group; all 8 enzymes; the 6 muscle labels; nucleobases, base pair(s), helix of sugar-phosphates, sugar phosphate backbone; full names; all five bases; A–T and G–C; phosphate/ribose/base; double- vs. usually single-stranded; single nucleobase; deoxyribose/ribose H vs. OH; the Slide 29 caption.
- **Missing:** none.

## 2. No guessed scope

- I scanned every material for flags, "core", "extra detail", "memorize", "background only", "scope", "On the test", "skip", "optional", "not tested", "star" and "key image". None are used as scope wording. The only hits were ordinary words like "starts", "starch" and "flex-start", plus the teacher's own "focusing" inside the exact Slide 7 quote.
- "From your teacher" (guide, outline, swaps.json) says no test list was shared and quotes the Slide 7 note exactly.
- "Any answer works — this is a warm-up" applies only to the opinion prompts on slides 19, 23 and 27. It does not describe what to study.

## 3. No non-teacher content

- Every outside explanation in the guide and Source Notes starts with **Outside source:** and has a citation. In the glossary, the teacher's wording comes first and each outside meaning follows "Outside source:".
- Discussion answers are labeled correctly. "From the picture" is used on slides 15, 18 and 28. "Possible answer" plus Outside source is used on slides 16, 17, 20, 21, 24, 25 and 29. I confirmed each "from the picture" claim against the slide.
- Bases are limited to what the pictures show. Uracil appears on slides 26 and 28.
- The Exo/exit and Endo/enter memory trick is a memory aid, not a new fact.

## 4. Drills

- **CARDS.js (45) = flashcards.json (45):** the content is identical (compared by script). Every answer is found in the slides, notes, or pictures.
- **QUIZ (20):** every correct answer comes from the teacher. All stems are direct questions. There are no "…" blanks, no all/none options, and no flipped or one-letter-off options.
- **SCENARIOS (6):** every stem is ≤ 2 sentences and ends with a question. Every answer and rationale comes from the teacher.

## 5. Accuracy

No blocking factual errors. I checked A–T/G–C pairing, strands, which sugar goes with which molecule, the ATP equation and cycle direction, 9 vs. 4 kcal/g, exo/endo on the diagrams, which food each enzyme is listed under (matches s24-1), and the typo table ("Sucrase-isomaltas"; notes "surrounding").

## 6. Readability

- A script checked every study-guide sentence, leaving out headings, tables and exact teacher quotes. None is over 20 words.

## Advisory (not blocking)

- **PRINTCHEAT.js**, nucleic acids row: "RNA protein synthesis (single, ribose, U)". The Slide 28 picture says "usually single-stranded", and the guide, cards and glossary say "usually". Consider "usually single".
- **SUMMARY.js:** "Carbon has four valence electrons, so it forms rings and chains." The "so" adds a cause-and-effect link the slide doesn't state. "…and it forms rings and chains" would match the slide.
- **MAPS.js map 3:** the "builds by" / "breaks by" arrows link anabolism to dehydration synthesis and catabolism to hydrolysis. The teacher never states that link.
- **Glossary:** there are no rows for the picture labels "helix of sugar-phosphates" or "single nucleobase" (both are in the guide). The header credits all outside meanings to OpenStax Biology 2e.
- **Slide 16 BONUS possible answer (fat cells):** has no everyday example.

VERDICT: PASS
