const MAPS = [
 {title:"1 · From amino acid to working protein", html:`<div class="flow">
   <div class="frow">${n(C['proteins'].color,"Amino acid","one building block")}</div>
   ${down('join in a chain to make a')}
   <div class="frow">${n('#0891b2',"Peptide","about 2-50 amino acids")}</div>
   ${down('grows longer into a')}
   <div class="frow">${n('#0284c7',"Polypeptide","about 51 or more amino acids")}</div>
   ${down('folds into a working shape')}
   <div class="frow" style="align-items:center">${n(C['proteins'].color,"Protein","working 3D shape")}${arrowR('its shape decides')}${n('#0f766e',"Its job","STRUCTURE = FUNCTION")}</div>
 </div>`},
 {title:"2 · The four levels of protein structure", html:`<div class="flow">
   <div class="frow">${n(C['primary'].color,"Primary","order of amino acids · like letters")}</div>
   ${down('hydrogen bonds fold it into')}
   <div class="frow">${n(C['secondary'].color,"Secondary","coils and zigzag sheets · like words")}</div>
   ${down('side chains pull it into')}
   <div class="frow">${n(C['tertiary'].color,"Tertiary","whole 3D shape · like sentences")}</div>
   ${down('only if 2 or more chains join')}
   <div class="frow">${n(C['quaternary'].color,"Quaternary","not all proteins · like paragraphs")}</div>
 </div>`},
 {title:"3 · Nucleic acids: DNA and RNA", html:`<div class="flow">
   <div class="frow">${n(C['nucleic'].color,"Nucleotide","sugar · phosphate group · base")}</div>
   ${down('link together to make')}
   <div class="frow" style="align-items:flex-start;gap:22px">
     <div class="flow" style="gap:6px">${n(C['dna'].color,"DNA","A, T, C, G · deoxyribose")}${down('twists into a')}${n(C['dna'].color,"Double helix","A with T · C with G")}</div>
     <div class="flow" style="gap:6px">${n('#059669',"RNA","A, U, C, G · ribose")}</div>
   </div>
 </div>`}
];
