const QUIZ = [
 ["Which atom in water is partial negative?",["Oxygen","Hydrogen","Both atoms equally"],0,"polarity"],
 ["Where does a hydrogen bond form?",["Between two molecules","Inside one molecule","Only inside ice"],0,"hbond"],
 ["What is water sticking to water called?",["Cohesion","Adhesion","Density"],0,"cohesion"],
 ["What is water sticking to a glass tube called?",["Adhesion","Cohesion","Specific heat"],0,"cohesion"],
 ["What causes capillary action?",["Cohesion and adhesion","Cohesion only","Density"],0,"capillary"],
 ["What causes surface tension?",["Cohesion","Adhesion","Specific heat"],0,"surface"],
 ["Water has a high specific heat. What does that mean for water?",["It warms up and cools down slowly","It dissolves oil easily","It floats when it freezes"],0,"heat"],
 ["Water's high specific heat helps living things keep what steady?",["Their body temperature (homeostasis)","Their surface tension","Their capillary action"],0,"heat"],
 ["What are oils and fats?",["Hydrophobic","Hydrophilic","Amphipathic"],0,"hydro"],
 ["What do you call a molecule with a water-loving part and a water-fearing part?",["Amphipathic","Hydrophilic","Hydrophobic"],0,"hydro"],
 ["What is sand mixed into water?",["Suspension","Emulsion","Hydrogen bond"],0,"mixtures"],
 ["What do oil drops spread through water make?",["Emulsion","Suspension","Meniscus"],0,"mixtures"],
 ["At what temperature is water most dense?",["4°C","50°C","100°C"],0,"density"]
].map((x,i)=>({id:i,q:x[0],opts:x[1],correct:x[2],t:x[3]}));
