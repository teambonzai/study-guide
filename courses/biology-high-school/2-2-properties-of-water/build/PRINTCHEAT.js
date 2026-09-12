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
   <li><b>Oxygen</b> = partial negative</li>
   <li><b>Hydrogens</b> = partial positive</li>
   <li>Oxygen pulls the electrons closer</li></ul></div>
  <div class="blk"><h2>Hydrogen bonds</h2><ul>
   <li>H of one molecule pulled to O of another</li>
   <li>A pull <b>between</b> molecules</li>
   <li>Can involve N, O, or F</li></ul></div>
  <div class="blk"><h2>Sticking</h2><ul>
   <li><b>Cohesion</b> = water to water</li>
   <li><b>Adhesion</b> = water to something else</li></ul></div>
  <div class="blk"><h2>Climbing and skin</h2><ul>
   <li><b>Capillary action</b> = rises up a thin tube</li>
   <li>Caused by cohesion + adhesion</li>
   <li><b>Surface tension</b> = surface resists a push</li>
   <li>Caused by cohesion only</li></ul></div>
  <div class="blk"><h2>Specific heat</h2><ul>
   <li>Energy to raise temperature <b>1°C</b></li>
   <li>Water's is <b>high</b>, so it warms slowly</li>
   <li>Keeps temperatures steady (<b>homeostasis</b>)</li></ul></div>
  <div class="blk"><h2>Mixing with water</h2><ul>
   <li><b>Hydrophilic</b> = dissolves (salt, sugar)</li>
   <li><b>Hydrophobic</b> = doesn't (oil, fat)</li>
   <li><b>Amphipathic</b> = both parts (cell membranes)</li></ul></div>
  <div class="blk"><h2>Mixtures</h2><ul>
   <li><b>Suspension</b> = bits don't dissolve (sand)</li>
   <li><b>Emulsion</b> = liquids don't mix (oil drops)</li></ul></div>
  <div class="blk"><h2>Density</h2><ul>
   <li><b>D = m / V</b></li>
   <li>Water is densest at <b>4°C</b></li>
   <li>Ice is less dense, so it <b>floats</b></li></ul></div>
  </div></body></html>`;
  w.document.write(html); w.document.close(); w.focus(); setTimeout(()=>w.print(),350);
}
