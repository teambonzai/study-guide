const MAPS = [
 {title:"1 · The four biomolecules", html:`<div class="flow">
   <div class="frow">${n(C['carbon'].color,"Macromolecules","monomers + monomers = polymer")}</div>
   ${down('four groups')}
   <div class="frow" style="align-items:flex-start;gap:14px">
     ${n(C['lipids'].color,"Lipids","fatty acids & glycerol · long-term energy")}
     ${n(C['carbs'].color,"Carbohydrates","monosaccharides · short-term energy")}
     ${n(C['proteins'].color,"Proteins","amino acids · structural support, enzymes")}
     ${n(C['nucleic'].color,"Nucleic acids","nucleotides · genetic information")}
   </div>
 </div>`},
 {title:"2 · Exothermic or endothermic?", html:`<div class="flow">
   <div class="frow">${n(C['exoendo'].color,"A chemical reaction","look at the energy diagram")}</div>
   ${down('compare products to reactants')}
   <div class="frow" style="align-items:flex-start;gap:22px">
     <div class="flow" style="gap:6px">${n('#dc2626',"Products lower")}${down('so heat is')}${n('#dc2626',"Released: exothermic","feels hotter")}</div>
     <div class="flow" style="gap:6px">${n('#0891b2',"Products higher")}${down('so heat is')}${n('#0891b2',"Absorbed: endothermic","feels cooler")}</div>
   </div>
 </div>`},
 {title:"3 · Building and breaking molecules", html:`<div class="flow">
   <div class="frow">${n(C['buildbreak'].color,"Molecules in cells","built up or broken down")}</div>
   ${down('two directions')}
   <div class="frow" style="align-items:flex-start;gap:22px">
     <div class="flow" style="gap:6px">${n('#059669',"Anabolism","small to large · uses energy")}${down('builds by')}${n('#059669',"Dehydration synthesis","water removed")}</div>
     <div class="flow" style="gap:6px">${n('#ea580c',"Catabolism","large to small · releases energy")}${down('breaks by')}${n('#ea580c',"Hydrolysis","water added")}</div>
   </div>
 </div>`}
];
