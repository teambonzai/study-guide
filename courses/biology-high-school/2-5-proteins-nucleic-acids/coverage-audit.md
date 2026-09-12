# Coverage Audit — 2.5 Proteins & Nucleic Acids (final gate)

Independent re-audit against slides.json, pptx speaker notes (slides 4, 5, 6, 12), all 14 rendered
slide PNGs, and the audience-macy rules. No study materials were edited.

## (A) Coverage — PASS

| Slide | Core idea | Guide | Outline |
|---|---|---|---|
| 1 | Title, Unit Two | header | §1 |
| 2 | Functions, enzymes, amino acid monomer, ~20 AAs, R-group, peptide 2–50 / polypeptide 51+, protein 1+ polypeptides, STRUCTURE = FUNCTION | §1, §2 | §2 |
| 3 | Four levels in order | §3 | §3 |
| 4 | Order of AAs; peptide bond covalent, dehydration synthesis; DNA sets order (notes) | §4 | §4 |
| 5 | α helix, β pleated sheet, hydrogen bonds, backbone (notes) | §5 | §5 |
| 6 | 3D shape from side-chain interactions; bond names ⛔ | §6 | §6 |
| 7–8 | Hydrophobic effect: nonpolar center, polar outside, hydration layer | §7 | §7–8 |
| 9 | 2+ subunits; not all proteins; dimer/trimer/tetramer ⛔ | §8 | §9 |
| 10 | Letters/words/sentences/paragraphs analogy | §9 | §10 |
| 11 | Functions, DNA/RNA, nucleotide 3 parts, bases A T C G / A U C G | §10 | §11 |
| 12 | Double helix, backbone outside, H-bonded pairs A–T C–G, antiparallel (notes) | §12 | §12 |
| 13 | Extra drawings (⛔) | §12 📷 pointer | §13 |
| 14 | Thymine/deoxyribose vs uracil/ribose; shared A C G | §11 | §14 |

All 📷 pointers describe things actually visible on the rendered slides (e.g. pink "STRUCTURE =
FUNCTION" on Slide 2, "+2(H2O)" on Slide 4, red/yellow dots on Slides 7–8, P circles on Slide 12).

## (B) Accuracy — PASS

No factual errors found. Outside facts (covalent = shared electrons, hydrogen bond = weak pull,
hydrophobic = doesn't mix with water) are cited to OpenStax Biology 2e. Simplifications ("weak
pull", "water-fearing parts hide in the middle") are acceptable for this level and not misleading.
Slide typos (&mages, Quanternary, Set, "fourth levels") are correctly logged. Slide 6 notes'
"polypeptide chains" wording is correctly clarified.

## (C) ⛔ compliance — PASS

No flashcard, quiz item, or scenario asks for the Slide 6 bond names (ionic, disulfide,
hydrophobic interaction), end labels, dimer/trimer/tetramer, purine/pyrimidine, or H-bond atoms.
Quiz "Tertiary structure comes from pulls between which parts?" → "Side chains" is core (slide
bullet). "What holds DNA base pairs together?" → hydrogen bonds is core (Slide 12 notes + visible
Slide 13 label), not a ⛔ item.

## (D) Readability — PASS

- Study guide: scripted check found **no sentence over 20 words**.
- Sections follow the shape (bold main idea, short bullets, ≤1 callout, 📷 line); tables ≤3 columns / ≤5 rows.
- Quiz: 15 items, all direct questions, no "…" stems, no all/none-of-the-above.
- Scenarios: 5, each ≤2 sentences and ending in a question; rationales ≤2 sentences.
- Flashcards: 25, answers 1–6 words or ≤3-item lists.
- Glossary: 23 terms, all definitions ≤15 words.
- Jargon mostly glossed in place (monomer, covalent, dehydration synthesis, hydrophobic, subunit, antiparallel, hereditary information).

## (E) Wording / titles — PASS

No "professor", clinical, or nursing wording anywhere ("your teacher's slides"). "2.5" appears in
study-guide, outline, glossary, source notes, flashcards meta, swaps.json title/h1, and cheat sheet.

## Must-fix

None.

## Minor polish (optional, not blocking)

1. **build/QUIZ.js Q3** — option "Shape does not matter" is a simple opposite of the correct answer. Swap for a different idea, e.g. "Proteins are made of nucleotides".
2. **build/QUIZ.js Q9** — correct option "Gather in the center" is the only one not starting with "They"; it stands out. Use "They gather in the center".
3. **build/QUIZ.js Q15** — "Use different sugars" → "They use different sugars" (parallel grammar).
4. **build/SCENARIOS.js #5** — options T-A-C-G / A-T-G-C / C-G-A-T / G-C-A-T are four arrangements of the same letters; careful reading needed. Consider keeping one look-alike (A-T-G-C) and making the other two clearly different ideas.
5. **study-guide.md §4** — "Changing one amino acid can change its shape and job." "its" is vague → "the protein's shape and job".
6. **study-guide.md §6** — "side chains pull on each other" and "Side chains stick to each other in a few different ways" say nearly the same thing; one could go.
7. **study-guide.md §10** — "a 5-carbon sugar, a phosphate group, and a nitrogenous base" stacks three terms in one sentence; could add that the base is "the part with the letter" right there (already in the next sentence, so low priority).
8. **study-guide.md §1** — "regulate" has no plain meaning; could add "(control)".
9. **build/SUMMARY.js** — roughly 185–190 words, slightly over the ~180 target.

VERDICT: PASS
