document.getElementById('testChips').innerHTML = [
 ["their jobs","Protein jobs · STRUCTURE = FUNCTION"],
 ["building blocks","Amino acids · peptides · polypeptides"],
 ["four levels","The four levels of structure"],
 ["primary structure","Level 1: order of amino acids"],
 ["secondary structure","Level 2: coils and sheets"],
 ["tertiary structure","Level 3: whole 3D shape"],
 ["hydrophobic effect","Hydrophobic effect"],
 ["quaternary","Level 4: 2+ chains, not all proteins"],
 ["alphabet analogy","Letters · words · sentences · paragraphs"],
 ["nucleic acids","Nucleotides and their 3 parts"],
 ["dna vs. rna","DNA vs. RNA"],
 ["double helix","DNA double helix · base pairs"]
].map(([kw,label])=>`<button class="chip chip-link" onclick="openGuide('${kw}')">${esc(label)} ${icon('arrowright')}</button>`).join('');
