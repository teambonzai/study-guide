function printCheat(){
  const w=window.open('','_blank');
  const css=`body{font:13px/1.5 -apple-system,Arial,sans-serif;color:#111;margin:24px;max-width:780px}
   h1{font-size:20px;color:#0d9488;margin:0 0 2px} .sub{color:#555;font-size:12px;margin-bottom:12px}
   h2{font-size:13px;color:#0d9488;border-bottom:1.5px solid #0d9488;padding-bottom:2px;margin:14px 0 4px;text-transform:uppercase;letter-spacing:.5px}
   .cols{column-count:2;column-gap:24px} .blk{break-inside:avoid;margin-bottom:8px} b{color:#0f766e}
   ul{margin:2px 0 2px 16px;padding:0} li{margin:2px 0} @media print{body{margin:10px}}`;
  const html=`<!doctype html><html><head><meta charset="utf-8"><title>2.2 Properties of Water — Cheat Sheet</title><style>${css}</style></head><body>
  <h1>2.2 Properties of Water — Cheat Sheet</h1><div class="sub">Biology · Unit Two: Biomolecules</div>
  <div class="cols">
  <div class="blk"><h2>Water is polar</h2><ul>
   <li><b>Oxygen</b> = partial negative (δ−)</li>
   <li><b>Hydrogens</b> = partial positive (δ+)</li>
   <li>Oxygen pulls the electrons closer</li>
   <li>Bond angle <b>104.45°</b>; bond length <b>95.84 pm</b></li>
   <li>Drawn 3 ways: geometric, ball-and-stick, space-filling</li></ul></div>
  <div class="blk"><h2>Hydrogen bonds</h2><ul>
   <li>H of one molecule pulled to O of another</li>
   <li>A pull <b>between</b> molecules (intermolecular)</li>
   <li>Other molecules too; can involve N, O, or F</li>
   <li>Inside one molecule: <b>polar covalent bond</b> (intramolecular)</li></ul></div>
  <div class="blk"><h2>Cohesion and adhesion</h2><ul>
   <li><b>Cohesion</b> = water to water ("Co" = together)</li>
   <li><b>Adhesion</b> = water to something else ("Ad" = between)</li>
   <li>Both are hydrogen bonds in the wall picture</li></ul></div>
  <div class="blk"><h2>Capillary action</h2><ul>
   <li>Water rises up a thin <b>capillary tube</b></li>
   <li>Caused by cohesion + adhesion</li>
   <li>Curved top = <b>meniscus</b>; thinnest tube = highest water</li></ul></div>
  <div class="blk"><h2>Surface tension</h2><ul>
   <li>Surface resists an outside force</li>
   <li>Caused by <b>cohesion</b>; an insect stands on it (photo)</li>
   <li>Surface molecule pulled <b>inward</b></li>
   <li>Inner molecule pulled <b>all directions</b></li>
   <li>Stronger pulls at surface, weaker in the bulk</li></ul></div>
  <div class="blk"><h2>Specific heat</h2><ul>
   <li>Energy to raise the temperature of water <b>1°C</b></li>
   <li>Copper <b>390</b> · aluminum <b>910</b> · water <b>4200</b> J/kg°C</li>
   <li>Lower = warms and cools <b>quickly</b></li>
   <li>Higher = warms and cools <b>slowly</b></li>
   <li>Keeps climates and body temperatures steady (<b>homeostasis</b>)</li></ul></div>
  <div class="blk"><h2>Mixing with water</h2><ul>
   <li><b>Hydrophilic</b> = dissolves (salts, sugars)</li>
   <li><b>Hydrophobic</b> = doesn't (oils, fats)</li>
   <li><b>Amphipathic</b> = both parts (soap bubbles)</li>
   <li>Forms cell membranes (phospholipid bilayers)</li>
   <li>Phospholipid: hydrophilic head, hydrophobic tail</li></ul></div>
  <div class="blk"><h2>Mixtures</h2><ul>
   <li><b>Suspension</b> = large bits don't dissolve (blood cells in plasma, sand)</li>
   <li><b>Emulsion</b> = liquids don't mix (oil droplets, bile and fats)</li></ul></div>
  <div class="blk"><h2>Density</h2><ul>
   <li><b>D = m / V</b> (also <b>ρ = M / V</b>)</li>
   <li>Water is densest at <b>4°C</b></li>
   <li>Ice is less dense, so it <b>floats</b></li></ul></div>
  </div></body></html>`;
  w.document.write(html); w.document.close(); w.focus(); setTimeout(()=>w.print(),350);
}
