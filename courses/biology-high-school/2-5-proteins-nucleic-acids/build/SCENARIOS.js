const SCENARIOS = [
 ["You bend your house key, and now it won't open the door. Which lesson idea is this like?",
  ["STRUCTURE = FUNCTION: shape decides the job","Proteins are made of nucleotides","Every protein has four levels","DNA uses the base U"],0,
  "A key works because of its shape. A protein's shape decides its job too.","proteins"],
 ["You shake salad dressing, and the oil drops clump together away from the water. What in a folding protein acts like the oil?",
  ["Nonpolar amino acids","The sugar in DNA","The bases in RNA","Peptide bonds"],0,
  "Nonpolar amino acids are water-fearing. They clump in the center when a protein folds.","tertiary"],
 ["When you text, letters make words and words make a sentence. Which protein level is like the sentence?",
  ["Tertiary structure","Primary structure","Secondary structure","Quaternary structure"],0,
  "In the Slide 10 analogy, sentences match tertiary structure. It is the whole 3D shape of one chain.","levels"],
 ["Your friend says every protein has all four levels. How many levels does a protein with just one chain have?",
  ["Three levels","Four levels","One level","No levels"],0,
  "Quaternary structure needs 2 or more chains. Not all proteins have it.","quaternary"],
 ["Your paper DNA ladder reads A-T-G-C on one side. What goes on the other side?",
  ["T-A-C-G","A-T-G-C","C-G-A-T","G-C-A-T"],0,
  "A pairs with T, and C pairs with G.","dna"]
].map((x,i)=>({id:i,q:x[0],opts:x[1],correct:x[2],rat:x[3],t:x[4]}));
