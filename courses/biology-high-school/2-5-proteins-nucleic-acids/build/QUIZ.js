const QUIZ = [
 ["What is the building block of a protein?",["Amino acid","Nucleotide","Sugar","Phosphate group"],0,"proteins"],
 ["What is a chain of 30 amino acids called?",["Peptide","Polypeptide","Nucleotide","Double helix"],0,"proteins"],
 ["What does STRUCTURE = FUNCTION mean?",["A protein's shape decides its job","A protein's size decides its color","Every protein does the same job","Proteins store genetic information"],0,"proteins"],
 ["What is primary structure?",["The order of amino acids","The whole 3D shape","Coils and zigzag sheets","Two or more chains together"],0,"primary"],
 ["How do peptide bonds form?",["Dehydration synthesis","Base pairing","Protein folding","Melting"],0,"primary"],
 ["Which level has the alpha helix and beta pleated sheet?",["Secondary structure","Primary structure","Tertiary structure","Quaternary structure"],0,"secondary"],
 ["What holds secondary structure in shape?",["Hydrogen bonds","Peptide bonds","Phosphate groups","Sugars"],0,"secondary"],
 ["Tertiary structure comes from pulls between which parts?",["Side chains","Nucleotides","Separate proteins","DNA strands"],0,"tertiary"],
 ["When a chain folds in water, where do nonpolar amino acids go?",["Gather in the center","They turn into DNA","They break off the chain","They turn into water"],0,"tertiary"],
 ["Which proteins have quaternary structure?",["Only proteins with 2 or more chains","Every protein","Only proteins in plants","Only very small proteins"],0,"quaternary"],
 ["In the writing analogy, sentences match which level?",["Tertiary","Primary","Secondary","Quaternary"],0,"levels"],
 ["What is the building block of nucleic acids?",["Nucleotide","Amino acid","Peptide","Side chain"],0,"nucleic"],
 ["Which base is in RNA but not in DNA?",["Uracil (U)","Thymine (T)","Adenine (A)","Guanine (G)"],0,"nucleic"],
 ["In DNA, which base does A pair with?",["T","G","C","A"],0,"dna"],
 ["DNA's two strands are antiparallel. What does that mean?",["They run in opposite directions","They are made of amino acids","They never touch","Use different sugars"],0,"dna"]
].map((x,i)=>({id:i,q:x[0],opts:x[1],correct:x[2],t:x[3]}));
