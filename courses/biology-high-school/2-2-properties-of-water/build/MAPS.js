const MAPS = [
 {title:"1 · Why water is polar", html:`<div class="flow">
   <div class="frow">${n(C['polarity'].color,"Water molecule (H2O)","1 oxygen + 2 hydrogens")}</div>
   ${down('electrons pulled toward oxygen')}
   <div class="frow" style="align-items:flex-start;gap:22px">
     <div class="flow" style="gap:6px">${n('#dc2626',"Oxygen","partial negative")}</div>
     <div class="flow" style="gap:6px">${n('#0284c7',"Hydrogens","partial positive")}</div>
   </div>
   ${down('opposite ends of two molecules attract')}
   <div class="frow">${n(C['hbond'].color,"Hydrogen bond","a pull between molecules")}</div>
 </div>`},
 {title:"2 · Sticking and climbing", html:`<div class="flow">
   <div class="frow">${n(C['hbond'].color,"Hydrogen bonds","water pulls on water")}</div>
   ${down('lead to')}
   <div class="frow" style="align-items:flex-start;gap:22px">
     <div class="flow" style="gap:6px">
       ${n(C['cohesion'].color,"Cohesion","water to water")}${down('alone causes')}${n(C['surface'].color,"Surface tension","the surface resists an outside force")}
     </div>
     <div class="flow" style="gap:6px">
       ${n('#0f766e',"Adhesion","water to something else")}${down('plus cohesion causes')}${n(C['capillary'].color,"Capillary action","water rises up a thin tube")}
     </div>
   </div>
 </div>`},
 {title:"3 · Specific heat: fast vs. slow", html:`<div class="flow">
   <div class="frow">${n(C['heat'].color,"Specific heat capacity","energy to warm by 1°C")}</div>
   ${down('compare')}
   <div class="frow" style="align-items:flex-start;gap:22px">
     <div class="flow" style="gap:6px">
       ${n('#ea580c',"Low: copper 390, aluminum 910","little energy needed")}${down('so they')}${n('#ea580c',"Warm up fast","and cool down fast")}
     </div>
     <div class="flow" style="gap:6px">
       ${n('#0284c7',"High: water 4200","lots of energy needed")}${down('so it')}${n('#0284c7',"Warms up slowly","keeps temperatures steady")}
     </div>
   </div>
 </div>`}
];
