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
  <div class="blk"><h2>1. Protein jobs</h2><ul>
   <li>Regulate · transport · structure · control reaction rates</li>
   <li><b>Enzymes</b> control reaction rates</li>
   <li><b>STRUCTURE = FUNCTION</b>: shape decides the job</li></ul></div>
  <div class="blk"><h2>2. Amino acids</h2><ul>
   <li>Monomer = <b>amino acid</b> (about 20 kinds)</li>
   <li>Parts: <b>amino group</b> · <b>carboxyl group</b> · <b>side chain (R-group)</b></li>
   <li>The side chain differs in each one</li>
   <li>Side-chain groups: <b>nonpolar</b> (9) · <b>polar</b> (6) · <b>electrically charged</b> (5): acidic (2), basic (3)</li></ul></div>
  <div class="blk"><h2>3. Amino acid to protein</h2><ul>
   <li><b>Peptide</b> about 2–50 aa · <b>polypeptide</b> about 51+ aa</li>
   <li><b>Protein</b> = 1+ polypeptides, 3D, functional</li></ul></div>
  <div class="blk"><h2>4–10. The four levels</h2><table>
   <tr><td><b>Primary</b></td><td>Order of amino acids · covalent peptide bonds by dehydration synthesis · N-terminus to C-terminus · DNA sets the order</td><td>Letters</td></tr>
   <tr><td><b>Secondary</b></td><td>α helix · β pleated sheet · hydrogen bonds (carbonyl O to amino H) along the backbone</td><td>Words</td></tr>
   <tr><td><b>Tertiary</b></td><td>One chain's 3D shape · side chains: ionic bond, hydrogen bond, disulfide bridge, hydrophobic interaction</td><td>Sentences</td></tr>
   <tr><td><b>Quaternary</b></td><td>2+ subunits · <b>not all proteins</b> · dimer (homo/hetero), trimer (collagen), tetramer (hemoglobin, alpha-2-beta-2)</td><td>Paragraphs</td></tr></table></div>
  <div class="blk"><h2>8. Hydrophobic effect</h2><ul>
   <li>Nonpolar amino acids fold to the <b>center</b></li>
   <li>Polar amino acids stay on the <b>outside</b></li>
   <li>Folding shrinks the <b>hydration layer</b> (water around the chain)</li></ul></div>
  <div class="blk"><h2>11. Nucleic acids</h2><ul>
   <li>Store &amp; pass on hereditary info · encode proteins</li>
   <li>Examples: <b>DNA</b>, <b>RNA</b> · monomer = <b>nucleotide</b></li>
   <li>Nucleotide = 5-carbon sugar + phosphate group + nitrogenous base</li>
   <li>Purine bases: adenine, guanine · pyrimidine bases: cytosine, thymine (in DNA)</li></ul></div>
  <div class="blk"><h2>12. DNA vs. RNA</h2><table>
   <tr><td></td><td><b>DNA</b></td><td><b>RNA</b></td></tr>
   <tr><td>Bases</td><td>A, <b>T</b>, C, G</td><td>A, <b>U</b>, C, G</td></tr>
   <tr><td>Sugar</td><td>Deoxyribose</td><td>Ribose</td></tr>
   <tr><td>Strands</td><td>Two</td><td>One</td></tr></table></div>
  <div class="blk"><h2>13–14. DNA shape</h2><ul>
   <li><b>Double helix</b>: a twisted ladder</li>
   <li>Sugar-phosphate backbone outside · base pairs inside</li>
   <li><b>A–T</b> and <b>C–G</b> (complementary base pairing), held by hydrogen bonds</li>
   <li><b>Antiparallel</b>: 5′ end pairs with 3′ end · matters for copying DNA</li>
   <li>Key: <b>P</b> = phosphate · <b>S</b> = deoxyribose (sugar) · a <b>nucleotide</b> = one P, one S, one base</li></ul></div>
  <div class="blk"><h2>From your teacher</h2><ul>
   <li>No test list shared for this lesson, so study everything.</li></ul></div>
  </div></body></html>`;
  w.document.write(html); w.document.close(); w.focus(); setTimeout(()=>w.print(),350);
}
