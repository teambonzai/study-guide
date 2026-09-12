const SCENARIOS = [
 ["A snack has 10 grams of fat and 10 grams of carbs. Which one gives more energy?",
  ["The fat","The carbs","They give the same energy"],0,
  "Lipids hold 9 kcal per gram. Carbs hold only 4 kcal per gram.","lipids"],
 ["You sit by a campfire and your hands get warm. What kind of reaction is burning wood?",
  ["Exothermic","Endothermic","A physical change"],0,
  "Exothermic reactions release heat. That is why the fire feels hot.","exoendo"],
 ["An ice cube melts in your lemonade. Is that a chemical reaction?",
  ["No, it is a physical change","Yes, because its state changed","Yes, because heat was involved"],0,
  "Melted ice is still H₂O. Only its state changed, so it is a physical change.","reactions"],
 ["You eat a slice of bread. Your body splits the starch into glucose by adding water. What is this called?",
  ["Hydrolysis","Dehydration synthesis","Anabolism"],0,
  "Hydrolysis splits molecules by adding water. Starch into glucose is the example from the notes.","buildbreak"],
 ["You sprint to catch the bus, and your muscles need energy fast. Which reaction releases it?",
  ["ATP breaking into ADP + Pi","ADP + Pi joining back into ATP","Water freezing into ice"],0,
  "Breaking ATP releases energy, like using a charged battery. Rebuilding ATP takes energy.","atp"]
].map((x,i)=>({id:i,q:x[0],opts:x[1],correct:x[2],rat:x[3],t:x[4]}));
