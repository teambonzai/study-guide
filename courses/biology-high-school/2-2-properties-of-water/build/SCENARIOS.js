const SCENARIOS = [
 ["A water strider walks across a pond. Why doesn't it sink?",
  ["Surface tension","Adhesion to its legs","Water's high specific heat"],0,
  "Surface tension lets the top of the water resist a push. Cohesion causes it.","surface"],
 ["You put celery in dyed water, and the dye climbs to the top. What moved the water up?",
  ["Cohesion and adhesion","Surface tension only","Density"],0,
  "Water sticks to the plant's tubes and to itself. That is cohesion and adhesion.","capillary"],
 ["On a sunny day, a metal slide is too hot to touch. Why does the pool stay cool?",
  ["Water has a high specific heat","Water is less dense than metal","Water is hydrophobic"],0,
  "Water has a high specific heat. It soaks up heat without getting hot quickly.","heat"],
 ["Sugar disappears in water, but oil stays in blobs. Why?",
  ["Sugar is hydrophilic; oil is hydrophobic","Oil has a high specific heat","Both are amphipathic"],0,
  "Hydrophilic things like sugar dissolve in water. Hydrophobic things like oil do not.","hydro"],
 ["In winter, ice forms on top of a pond. Why doesn't the ice sink?",
  ["Ice is less dense than liquid water","Ice has a high specific heat","Ice sticks to the fish"],0,
  "Ice is less dense than liquid water, so it floats. This is density.","density"]
].map((x,i)=>({id:i,q:x[0],opts:x[1],correct:x[2],rat:x[3],t:x[4]}));
