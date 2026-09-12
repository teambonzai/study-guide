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
  <div class="blk"><h2>Carbon &amp; energy</h2><ul>
   <li>Monomers join to make a <b>polymer</b></li>
   <li>Carbon has <b>4 valence electrons</b></li>
   <li><b>Organic</b> = contains carbon</li>
   <li><b>1st law:</b> energy can't be made or destroyed</li>
   <li><b>2nd law:</b> entropy (disorder) increases</li></ul></div>
  <div class="blk"><h2>Reactions</h2><ul>
   <li><b>Chemical:</b> bonds break or form</li>
   <li><b>Physical:</b> melting ice is still H₂O</li>
   <li><b>Reactants</b> left · <b>products</b> right</li>
   <li><b>Exothermic</b> releases heat · <b>endothermic</b> absorbs heat</li></ul></div>
  <div class="blk"><h2>Building &amp; breaking</h2><ul>
   <li><b>Anabolism</b> builds, uses energy</li>
   <li><b>Catabolism</b> breaks, releases energy</li>
   <li><b>Dehydration synthesis:</b> water out</li>
   <li><b>Hydrolysis:</b> water in</li></ul></div>
  <div class="blk"><h2>ATP</h2><ul>
   <li>Energy currency of the cell</li>
   <li>ATP + water gives <b>ADP + Pi + energy</b></li>
   <li>Charged battery, then dead battery</li></ul></div>
  <div class="blk"><h2>The four biomolecules</h2><table>
   <tr><td><b>Lipids</b></td><td>CHO · fatty acids &amp; glycerol · long-term energy, 9 kcal/g</td></tr>
   <tr><td><b>Carbs</b></td><td>CHO 1:2:1 · monosaccharides · -ose · short-term energy, 4 kcal/g</td></tr>
   <tr><td><b>Proteins</b></td><td>CHON(S) · amino acids · structure, enzymes</td></tr>
   <tr><td><b>Nucleic acids</b></td><td>CHONP · nucleotides · DNA stores info, RNA helps make proteins</td></tr></table></div>
  </div></body></html>`;
  w.document.write(html); w.document.close(); w.focus(); setTimeout(()=>w.print(),350);
}
