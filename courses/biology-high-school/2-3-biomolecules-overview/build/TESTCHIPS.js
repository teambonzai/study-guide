document.getElementById('testChips').innerHTML = [
 ["polymers","Monomers, polymers & carbon"],
 ["thermodynamics","Energy and the laws of thermodynamics"],
 ["chemical reactions","Chemical reactions"],
 ["exothermic and endothermic","Exothermic and endothermic"],
 ["diagrams","Potential energy diagrams"],
 ["building and breaking","Building and breaking molecules"],
 ["atp","ATP"],
 ["lipids","Lipids"],
 ["carbohydrates","Carbohydrates"],
 ["proteins","Proteins"],
 ["nucleic acids","Nucleic acids"],
 ["compare","Compare the four biomolecules"],
 ["discussion","Class discussion"]
].map(([kw,label])=>`<button class="chip chip-link" onclick="openGuide('${kw}')">${esc(label)} ${icon('arrowright')}</button>`).join('');
