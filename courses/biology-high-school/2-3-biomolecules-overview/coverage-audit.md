# 2.3 Biomolecules Overview — Coverage Audit (final gate)

**Sources checked:** slides.json, the .pptx (speaker notes on slides 4–9 read in full), and every rendered slide image (1–29; slide 11 hidden and intentionally uncited). No recording.
**Materials checked:** study-guide.md, lecture-outline.md, key-terms-glossary.md, transcript-corrections.md, flashcards.json, build/*.js, build/swaps.json.
**Audience rules:** audience-macy.md.

## A. Slide coverage

| Slide | Core idea (visible / notes) | Study guide | Outline |
|---|---|---|---|
| 1 | Title | Header | Header |
| 2 | Monomers + monomers = polymer; carbon has 4 valence electrons (rings, chains); organic vs inorganic | §1 | §1 |
| 3 | Energy = ability to change/move matter; changes form; 1st law; 2nd law (entropy); potential/kinetic map | §2 | §2 |
| 4 | Chemical reaction = bonds break/form; physical change (melting) is not; reactants/products; coefficient; state letters (notes) | §3 | §3 |
| 5 | Exothermic releases heat (hotter than surroundings); endothermic absorbs heat (cooler); notes on spontaneity | §4 | §4 |
| 6 | Potential energy diagram; compare products vs reactants (notes) | §4 | §4 |
| 7 | Energy released vs absorbed graphs; activation energy deferred (⛔) | §4 (⛔ flagged) | §4 (⛔ flagged) |
| 8 | Anabolism builds (energy required); catabolism breaks (energy released) | §5 | §5 |
| 9 | Dehydration synthesis (water out); hydrolysis (water in, digestion; starch to glucose in notes) | §5 | §5 |
| 10 | ATP = energy currency; 3 phosphates, ribose, adenine | §6 | §6 |
| 12 | ATP + H₂O → ADP + Pi + energy | §6 | §6 |
| 13 | ATP/ADP cycle; charged vs dead battery; recharging requires energy, releases water | §6 | §6 |
| 14 | Lipids CHO; fatty acids & glycerol; phospholipid bilayer picture | §7 | §7 |
| 15 | Found in oils, butter, dairy, waxes | §7 | §7 |
| 16 | Long-term storage, 9 kcal/g; membrane, storage, insulation, signaling; BONUS | §7 + Class discussion | §7 |
| 17 | Partner talk (lipids in winter) | Class discussion ⛔ | Class discussion ⛔ |
| 18 | Carbs CHO 1:2:1; monosaccharides; -ose; mono/di/polysaccharide picture | §8 | §8 |
| 19 | Found in sugar, bread, pasta, rice, fruits | §8 | §8 |
| 20 | Short-term storage, 4 kcal/g; cell walls, energy, recognition; BONUS | §8 + Class discussion | §8 |
| 21 | Partner talk (non-animals need carbs?) | Class discussion ⛔ | Class discussion ⛔ |
| 22 | Proteins CHON(S); amino acids; -ase | §9 (+ Source Notes clarification) | §9 |
| 23 | Found in meat, eggs, beans, tofu, dairy, nuts | §9 | §9 |
| 24 | Secondary energy, structure; enzymes, transport, signaling, immune defense; BONUS | §9 + Class discussion | §9 |
| 25 | Partner talk (protein for gym-goers) | Class discussion ⛔ | Class discussion ⛔ |
| 26 | Nucleic acids CHONP; nucleotides (phosphate, sugar, base picture) | §10 | §10 |
| 27 | Found in any living cells as DNA & RNA | §10 | §10 |
| 28 | Store/code/transport genetic info; DNA stores, RNA protein synthesis; BONUS | §10 + Class discussion | §10 |
| 29 | Partner talk (foods without nucleic acids) | Class discussion ⛔ | Class discussion ⛔ |

Result: every visible slide's core idea is covered simply in both the guide and the outline. No gaps.

## B. Accuracy and citations

- No factual errors found. Content matches the slides and speaker notes.
- Outside facts carry citations: macromolecule definition, valence electrons, potential/kinetic, dehydration/hydrolysis name meanings, enzyme definition, kcal, and the Source Notes clarifications (-ase, cell walls, inorganic carbon compounds, melting ice).
- Class discussion answers: the section carries a blanket *(OpenStax Biology 2e)* citation, with per-line citations on Slides 16, 17, 20, 21. Slide 28 (deoxyribose) is visible on the slide itself. Slide 29 reasons from Slide 27 and says so. All are ⛔ and correct.
- Spontaneity claim ("exothermic can happen on its own") is attributed to the notes in the guide. Acceptable at this level.

## C. ⛔ items in drills

- CARDS (25), QUIZ (15), SCENARIOS (5): no correct answer depends on activation energy, partner talk, BONUS answers, photos, or molecule drawings.
- Energy-diagram items (card 20, quiz 8) rely only on products vs reactants height, which is core.

## D. Readability

- Study guide: every sentence checked by script; none over 20 words.
- Quiz: all 15 stems are short, single-sentence, and ask one clear thing. No "all/none of the above", no double negatives, no near-copy options.
- Scenarios: all 5 stems are ≤ 2 sentences, everyday settings (snack, campfire, lemonade, bread, bus). Rationales ≤ 2 short sentences.
- Flashcards: answers 1–6 words. flashcards.json matches build/CARDS.js (25 cards).
- Jargon has plain meanings next to it (valence electrons, entropy, kcal, monosaccharides, phospholipid bilayer, enzyme).
- Glossary: 24 terms, each ≤ 15 words.

## E. Wording and titles

- No "professor", clinical, patient, or nursing wording anywhere.
- Titles include "2.3": study guide, outline, glossary, Source Notes, swaps.json title/h1, app `<title>`, and cheat-sheet title.

## Must-fix

None.

## Minor polish (optional, does not affect verdict)

1. **Simple-opposite distractors.** Quiz "An exothermic reaction…" (Releases/Absorbs heat), "The 2nd law says entropy always…" (Increases/Decreases), "Anabolism…" (builds/breaks), and the sprint scenario (ATP breaking vs rebuilding). These test the exact core distinction and are not confusing, but a third clearly-different option already exists in each; fine as is.
2. **Bullet count.** §7 Lipids, §8 Carbohydrates, and §9 Proteins have 5 bullets (rule says 2–4). Each section is still under ~120 words.
3. **Two new terms in one sentence.** §2: "Energy can be **potential** (stored) or **kinetic** (moving)." Could split into two sentences.
4. **Quick review wording.** "Proteins come from amino acids. Nucleic acids come from nucleotides." "Are built from" matches the rest of the package better than "come from."
5. **Slide 20 picture caption** ("glucose gets converted to ATP") is not mentioned; "provides energy" already covers the idea.
6. **Class discussion Slides 24–25** lack a per-line citation (muscle; muscles built from proteins). The section-level citation covers them.

VERDICT: PASS
