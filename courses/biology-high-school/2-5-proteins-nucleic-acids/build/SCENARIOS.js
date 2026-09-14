const SCENARIOS = [
 ["You bend your house key, and now it won't open the door. Which lesson idea is this like?",
  ["STRUCTURE = FUNCTION: shape decides the job","Proteins are made of nucleotides","Every protein has four levels","DNA uses the base U"],0,
  "A key works because of its shape. A protein's shape decides its job too.","proteins"],
 ["You string 30 beads to make a bracelet. If each bead were an amino acid, what would the chain be called?",
  ["A peptide","A nucleotide","A double helix","A hydration layer"],0,
  "A peptide is about 2 to 50 amino acids. A polypeptide is about 51 or more.","proteins"],
 ["When you text, letters make words and words make a sentence. Which protein level is like the sentence?",
  ["Tertiary structure","Primary structure","Secondary structure","Quaternary structure"],0,
  "In the writing analogy, sentences match tertiary structure. It is the whole 3D shape of one chain.","levels"],
 ["You snap 4 building blocks together into one toy. If each block were a protein subunit, what would the toy be called?",
  ["A tetramer","A nucleotide","A peptide bond","A side chain"],0,
  "A tetramer has 4 subunits. Hemoglobin is the example of a tetramer.","quaternary"],
 ["You build a paper DNA ladder and put an A on one rail. What goes across from it on the other rail?",
  ["T","C","G","A phosphate"],0,
  "A pairs with T, and C pairs with G. Hydrogen bonds hold each pair together.","dna"]
].map((x,i)=>({id:i,q:x[0],opts:x[1],correct:x[2],rat:x[3],t:x[4]}));
