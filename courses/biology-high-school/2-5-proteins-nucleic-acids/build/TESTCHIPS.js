document.getElementById('testChips').innerHTML = [
 ["their jobs","Protein jobs · STRUCTURE = FUNCTION"],
 ["building blocks","Amino acid parts · chart of 20 amino acids"],
 ["amino acid to protein","Peptides · polypeptides · proteins"],
 ["four levels","The four levels of structure"],
 ["primary structure","Level 1: order of amino acids · peptide bonds"],
 ["secondary structure","Level 2: helices and pleated sheets"],
 ["tertiary structure","Level 3: 3D shape · side-chain interactions"],
 ["hydrophobic effect","Hydrophobic effect · folding in water"],
 ["quaternary","Level 4: 2+ subunits · dimer, trimer, tetramer"],
 ["alphabet analogy","Letters · words · sentences · paragraphs"],
 ["nucleic acids","Nucleotides · bases · purines and pyrimidines"],
 ["dna vs. rna","DNA vs. RNA"],
 ["double helix","DNA double helix · base pairs · antiparallel"],
 ["more dna pictures","More DNA drawings (Slide 13)"]
].map(([kw,label])=>`<button class="chip chip-link" onclick="openGuide('${kw}')">${esc(label)} ${icon('arrowright')}</button>`).join('');
