function printCheat(){
  const w=window.open('','_blank');
  const css=`body{font:13px/1.5 -apple-system,Arial,sans-serif;color:#111;margin:22px;max-width:800px}
   h1{font-size:19px;color:#0d9488;margin:0 0 2px} .sub{color:#555;font-size:11px;margin-bottom:10px}
   h2{font-size:12px;color:#0d9488;border-bottom:1.5px solid #0d9488;padding-bottom:2px;margin:12px 0 4px;text-transform:uppercase;letter-spacing:.5px}
   .cols{column-count:2;column-gap:22px} .blk{break-inside:avoid;margin-bottom:8px} b{color:#0f766e}
   ul{margin:2px 0 2px 16px;padding:0} li{margin:2px 0} table{border-collapse:collapse;width:100%;font-size:12px}
   td{border:1px solid #ccc;padding:3px 5px;vertical-align:top} @media print{body{margin:10px}}`;
  const html=`<!doctype html><html><head><meta charset="utf-8"><title>2.3 Biomolecules Overview — Cheat Sheet</title><style>${css}</style></head><body>
  <h1>2.3 Biomolecules Overview — Cheat Sheet</h1><div class="sub">Biology · Unit Two: Biomolecules</div>
  <div class="cols">
  <div class="blk"><h2>1 · Monomers &amp; carbon</h2><ul>
   <li>Monomers + monomers = <b>polymer</b> (polymerization)</li>
   <li>Carbon has <b>4 valence electrons</b>: rings and chains</li>
   <li><b>Organic</b> = contains carbon · <b>inorganic</b> = no carbon</li></ul></div>
  <div class="blk"><h2>2 · Energy</h2><ul>
   <li><b>Energy:</b> ability to change or move matter</li>
   <li><b>Potential:</b> chemical, gravitational, electrical, nuclear, elastic</li>
   <li><b>Kinetic:</b> electrical, light, sound, thermal, wind</li>
   <li><b>1st law:</b> can't destroy or create energy</li>
   <li><b>2nd law:</b> entropy always increases (ordered → disordered)</li>
   <li>Cannon: chemical → kinetic + potential → heat</li></ul></div>
  <div class="blk"><h2>3 · Chemical reactions</h2><ul>
   <li><b>Chemical:</b> bonds break and/or form</li>
   <li><b>Physical:</b> melting, boiling, freezing (still H₂O)</li>
   <li><b>Reactants</b> left · <b>products</b> right</li>
   <li><b>Coefficient:</b> how many are needed</li>
   <li>(s) solid · (l) liquid · (g) gas · (aq) aqueous, dissolved</li></ul></div>
  <div class="blk"><h2>4 · Exothermic &amp; endothermic</h2><ul>
   <li><b>Exothermic:</b> releases heat, hotter, can happen on its own</li>
   <li><b>Endothermic:</b> absorbs heat, cooler, needs energy input</li></ul></div>
  <div class="blk"><h2>5 · Potential energy diagrams</h2><ul>
   <li>Products lower = <b>exothermic</b> (energy released)</li>
   <li>Products higher = <b>endothermic</b> (energy absorbed)</li>
   <li><b>Activation energy:</b> the rise up to the hump</li>
   <li>Your teacher says: &ldquo;We will talk more about the &lsquo;activation energy&rsquo; concept in a future unit, for now we are just focusing on the exo/endo thermic ideas (energy releasing/absorbing)&rdquo;</li>
   <li>Outside source: activation energy is the energy needed to start a reaction</li></ul></div>
  <div class="blk"><h2>6 · Building &amp; breaking</h2><ul>
   <li><b>Anabolism</b> builds, energy required</li>
   <li><b>Catabolism</b> breaks, energy released</li>
   <li><b>Dehydration synthesis:</b> water out</li>
   <li><b>Hydrolysis</b> (digestion): water in, starch → glucose</li></ul></div>
  <div class="blk"><h2>7 · ATP</h2><ul>
   <li>Adenosine triphosphate: energy currency of the cell</li>
   <li>3 phosphates · ribose · adenine (nitrogenous base)</li>
   <li>ATP + H₂O → <b>ADP + Pi + energy</b></li>
   <li>Charged battery → dead battery · recharging requires energy</li></ul></div>
  <div class="blk"><h2>8–11 · The four biomolecules</h2><table>
   <tr><td><b>Lipids</b></td><td>CHO · fatty acids &amp; glycerol · oils, butter, dairy, waxes · long-term energy, 9 kcal/g · membrane, stores energy, insulation, signaling · phospholipid, triglyceride (glycerol + 3 fatty acids), cholesterol</td></tr>
   <tr><td><b>Carbs</b></td><td>CHO 1:2:1 · monosaccharides · -ose · sugar, bread, pasta, rice, fruits · short-term energy, 4 kcal/g · cell walls, energy, recognition · mono/di/polysaccharide · glucose → ATP</td></tr>
   <tr><td><b>Proteins</b></td><td>CHON(S) · amino acids (amine, carboxyl, variable R group) · -ase · meat, eggs, beans, tofu, dairy, nuts · secondary energy, structural support · enzymes, transport, signaling, immune defense · digestive enzymes: amylase, sucrase-isomaltase, maltase, lactase; pepsin, trypsin, peptidase; lipase</td></tr>
   <tr><td><b>Nucleic acids</b></td><td>CHONP · nucleotides (phosphate, sugar, base) · any living cells · DNA stores genetic info (double, deoxyribose, T) · RNA protein synthesis (usually single, ribose, U)</td></tr></table></div>
  </div></body></html>`;
  w.document.write(html); w.document.close(); w.focus(); setTimeout(()=>w.print(),350);
}
