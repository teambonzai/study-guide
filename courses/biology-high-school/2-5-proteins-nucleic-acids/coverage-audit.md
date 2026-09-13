# Coverage Audit — 2.5 Proteins & Nucleic Acids (Macy)

Re-audit, 2026-09-13, after the five must-fix items from the previous FAIL. Rules checked:
`.claude/skills/study-guide/reference/audience-macy.md` hard rules 1–4.

Sources checked: slides.json; speaker notes for Slides 4, 5, 6, and 12 (python-pptx); rendered slides;
full-size pictures, including s02-1, s02-2 (amino acid chart), and s10-1 (analogy).

Materials checked: study-guide.md, lecture-outline.md, key-terms-glossary.md, transcript-corrections.md,
flashcards.json, build/*.js, build/swaps.json. I also confirmed that index.html has the rebuilt text.

## Previous must-fix items

| # | Item | Result |
|---|---|---|
| 1 | All 20 chart amino acids with codes, grouped as on the chart | **Fixed.** The guide's §2 lists each name with its one-letter and three-letter code. The groups match s02-2: Nonpolar (9) Gly, Ala, Val, Leu, Ile, Met, Phe, Trp, Pro. Polar (6) Ser, Thr, Cys, Tyr, Asn, Gln. Acidic (2) Asp, Glu. Basic (3) Lys, Arg, His. Every name is spelled correctly, including the chart's "aspartate" and "glutamate." Outline §2 gives all 20 in the same groups using both codes, which fits its short form. |
| 2 | Slide 4 note about multi-subunit proteins | **Fixed.** Guide §5 "From the notes" says the gene may code for only part of a protein when the protein has more than one subunit. Outline §4 says "or part of it, for multi-subunit proteins." |
| 3 | Alphabets box letters | **Fixed.** Guide §10 has "A, U, V, R, S, O, T, and P." Outline §10 has "A, U, V, R, S, O, T, P." Both match s10-1. |
| 4 | "Five prime" wording | **Fixed.** Guide §13 has `**Outside source:** You say 5′ as "five prime"… *(OpenStax Biology 2e)*`, with an example. key-terms-glossary.md and build/GLOSSARY.js both have "Outside source: … (OpenStax Biology 2e)". |
| 5 | Amino H glossary example | **Fixed.** Ammonia is gone from all materials and from index.html. The new example is "the N with two H's at the left of the Slide 2 amino acid drawing." It is accurate: s02-1 shows H–N–H, and those H's are bonded to N. It is labeled Outside source and has a citation. |

## 1. Coverage — PASS

Every slide's text, every speaker note, and the labels in the pictures appear in the guide, and in short form in the outline. I re-checked Slides 2, 4, 10, 11, and 12 against their pictures: chart groups and names, Leu-Phe-"Set"-Cys, aa₁–aa₃ with + 2(H₂O), amino and carboxyl ends, the A–T 2-line and C–G 3-line pairs, the P circles, backbone, and complementary base pairing. The Slide 4 multi-subunit clause is now included, so no notes are missing.

## 2. No guessed scope — PASS

A grep for optional, skip, extra detail, memorize, background only, scope, on the test, core, bonus, 🎯, and ⛔ found nothing in any material. The "From your teacher" line and swaps.json `notTestedHtml` follow the rule. SLIDE_NOTES still has `star:true`, but profile-macy.json turns it off (`const star=false?`), so Macy sees no stars.

## 3. No non-teacher content — PASS

Every addition that isn't from the teacher starts with "Outside source:" and has a citation. That includes the five-prime line, and the chart names, which come from the s02-2 picture. List members match the slides: purines are adenine and guanine; pyrimidines are cytosine and thymine (in DNA); uracil appears only as "(in RNA)." Analogy callouts are the only other additions, which the voice rules allow.

## 4. Drills — PASS

- **CARDS:** build/CARDS.js matches flashcards.json exactly (51 cards). Every answer comes from the slides, notes, or pictures.
- **QUIZ:** all 20 questions are direct. The options are clearly different ideas, with nothing flipped or one letter off.
- **SCENARIOS:** all 5 stems end with "?", and the answers are teacher facts (a 30-bead chain is a peptide, 4 subunits is a tetramer, A pairs with T).
- **MAPS, MNEMONICS, PRINTCHEAT, SLIDE_NOTES, SUMMARY, TESTCHIPS:** consistent with the teacher's content.

## 5. Accuracy — PASS

No factual errors were found.

## 6. Readability — PASS

A script check found no study-guide sentence over 20 words. The only line it flagged was a false positive: two sentences ending in `."` that the splitter read as one. Each is under 12 words. The SUMMARY is 257 words, just over the ~250 target.

## Advisory (not blocking)

- Outline §11 still puts "A green box covers a small corner" on the small-drawing line. On slide-11.png, the box is at the bottom right of the big drawing. The guide's §11 has it right.
- In the guide, §12 (DNA vs. RNA, Slide 14) comes before §13 (Slide 12), which is out of lesson order.
- The glossary's 5′/3′ outside-source entry has no everyday example. The guide's version does.

## Must-fix

None.

VERDICT: PASS
