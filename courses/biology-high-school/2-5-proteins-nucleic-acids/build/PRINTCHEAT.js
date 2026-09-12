function printCheat(){
  const w=window.open('','_blank');
  const css=`body{font:13px/1.5 -apple-system,Arial,sans-serif;color:#111;margin:22px;max-width:800px}
   h1{font-size:19px;color:#0d9488;margin:0 0 2px} .sub{color:#555;font-size:11px;margin-bottom:10px}
   h2{font-size:12px;color:#0d9488;border-bottom:1.5px solid #0d9488;padding-bottom:2px;margin:12px 0 4px;text-transform:uppercase;letter-spacing:.5px}
   .cols{column-count:2;column-gap:22px} .blk{break-inside:avoid;margin-bottom:8px} b{color:#0f766e}
   ul{margin:2px 0 2px 16px;padding:0} li{margin:2px 0} table{border-collapse:collapse;width:100%;font-size:12px}
   td{border:1px solid #ccc;padding:3px 5px;vertical-align:top} @media print{body{margin:10px}}`;
  const html=`<!doctype html><html><head><meta charset="utf-8"><title>2.5 Proteins &amp; Nucleic Acids — Cheat Sheet</title><style>${css}</style></head><body>
  <h1>2.5 Proteins &amp; Nucleic Acids — Cheat Sheet</h1><div class="sub">Biology · Unit Two: Biomolecules</div>
  <div class="cols">
  <div class="blk"><h2>Proteins</h2><ul>
   <li>Building block = <b>amino acid</b> (about 20 kinds)</li>
   <li>The <b>side chain</b> is different in each one</li>
   <li><b>Peptide</b> about 2–50 · <b>polypeptide</b> about 51+</li>
   <li>Enzymes control reaction rates</li>
   <li><b>STRUCTURE = FUNCTION</b>: shape decides the job</li></ul></div>
  <div class="blk"><h2>The four levels</h2><table>
   <tr><td><b>Primary</b></td><td>Order of amino acids · peptide bonds</td><td>Letters</td></tr>
   <tr><td><b>Secondary</b></td><td>Coils and zigzag sheets · hydrogen bonds</td><td>Words</td></tr>
   <tr><td><b>Tertiary</b></td><td>Whole 3D shape · side chains pull</td><td>Sentences</td></tr>
   <tr><td><b>Quaternary</b></td><td>2+ chains · <b>not all proteins</b></td><td>Paragraphs</td></tr></table></div>
  <div class="blk"><h2>Folding in water</h2><ul>
   <li>Nonpolar amino acids hide in the <b>center</b></li>
   <li>Polar amino acids stay on the <b>outside</b></li></ul></div>
  <div class="blk"><h2>Nucleic acids</h2><ul>
   <li>Store and pass on information from parents</li>
   <li>Examples: <b>DNA</b>, <b>RNA</b></li>
   <li>Nucleotide = sugar + phosphate group + base</li></ul></div>
  <div class="blk"><h2>DNA vs. RNA</h2><table>
   <tr><td></td><td><b>DNA</b></td><td><b>RNA</b></td></tr>
   <tr><td>Bases</td><td>A, <b>T</b>, C, G</td><td>A, <b>U</b>, C, G</td></tr>
   <tr><td>Sugar</td><td>Deoxyribose</td><td>Ribose</td></tr></table></div>
  <div class="blk"><h2>DNA shape</h2><ul>
   <li><b>Double helix</b>: a twisted ladder</li>
   <li>Backbone outside · base pairs inside</li>
   <li><b>A–T</b> and <b>C–G</b>, held by hydrogen bonds</li>
   <li>Strands run in opposite directions</li></ul></div>
  </div></body></html>`;
  w.document.write(html); w.document.close(); w.focus(); setTimeout(()=>w.print(),350);
}
