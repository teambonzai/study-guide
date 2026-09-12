const QUIZ = [
 ["What do many monomers joined together make?",["Polymer","Atom","Reactant","Enzyme"],0,"carbon"],
 ["What makes a molecule organic?",["Contains carbon","Contains water","Is a gas","Is dissolved"],0,"carbon"],
 ["What does the 1st law say about energy?",["Can't be created or destroyed","Disappears over time","Is made by cells","Never changes form"],0,"energy"],
 ["What does the 2nd law say entropy always does?",["Increases","Turns into heat","Makes new atoms"],0,"energy"],
 ["Which one is a chemical change?",["Splitting water into hydrogen and oxygen gas","Ice melting","Water boiling","Cutting paper"],0,"reactions"],
 ["In 2 H₂ + O₂ → 2 H₂O, what is the 2 in front of H₂ called?",["Coefficient","Product","State letter"],0,"reactions"],
 ["What does an exothermic reaction do?",["Releases heat","Builds a polymer","Stores genetic information"],0,"exoendo"],
 ["On an energy diagram, products end higher than reactants. What kind of reaction is it?",["Endothermic","Exothermic","A physical change"],0,"exoendo"],
 ["What does anabolism do?",["Builds big molecules and uses energy","Stores genetic information","Melts solids into liquids"],0,"buildbreak"],
 ["What is breaking starch into glucose by adding water called?",["Hydrolysis","Dehydration synthesis","Melting"],0,"buildbreak"],
 ["What is ATP called?",["Energy currency of the cell","Building block of fats","Cell membrane"],0,"atp"],
 ["Which biomolecule stores long-term energy at 9 kcal per gram?",["Lipids","Carbohydrates","Proteins","Nucleic acids"],0,"lipids"],
 ["Monosaccharides are the building blocks of which biomolecule?",["Carbohydrates","Proteins","Lipids","Nucleic acids"],0,"carbs"],
 ["Which biomolecule is made of CHON(S)?",["Proteins","Lipids","Carbohydrates","Nucleic acids"],0,"proteins"],
 ["What does DNA do?",["Stores genetic information","Stores fat","Forms cell walls"],0,"nucleic"]
].map((x,i)=>({id:i,q:x[0],opts:x[1],correct:x[2],t:x[3]}));
