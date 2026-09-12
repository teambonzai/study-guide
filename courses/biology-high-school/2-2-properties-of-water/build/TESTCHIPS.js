document.getElementById('testChips').innerHTML = [
 ["is polar","Water is polar"],
 ["hydrogen bonds","Hydrogen bonds"],
 ["cohesion and adhesion","Cohesion and adhesion"],
 ["capillary","Capillary action"],
 ["surface tension","Surface tension"],
 ["specific heat","Specific heat"],
 ["amphipathic","Hydrophilic and hydrophobic"],
 ["suspensions","Suspensions and emulsions"],
 ["density","Density and ice"]
].map(([kw,label])=>`<button class="chip chip-link" onclick="openGuide('${kw}')">${esc(label)} ${icon('arrowright')}</button>`).join('');
