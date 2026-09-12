document.getElementById('testChips').innerHTML = [
 ["polymers","Monomers, polymers & carbon"],
 ["thermodynamics","Laws of energy"],
 ["chemical reactions","Chemical vs. physical change"],
 ["exothermic","Exothermic vs. endothermic"],
 ["building and breaking","Building and breaking molecules"],
 ["atp","ATP"],
 ["lipids","Lipids"],
 ["carbohydrates","Carbohydrates"],
 ["proteins","Proteins"],
 ["nucleic acids","Nucleic acids"],
 ["compare","Compare the four biomolecules"]
].map(([kw,label])=>`<button class="chip chip-link" onclick="openGuide('${kw}')">${esc(label)} ${icon('arrowright')}</button>`).join('');
