let bruch1= new Bruch(1,2);
let bruch2= new Bruch(4,2);

//let erwe= bruch1.erweitern(6);
//let kür= bruch1.kuerzen(2);

let add= bruch1.addieren(bruch2);
let mul= bruch2.multiplizieren(bruch2);

console.log("Ausgabe: "+bruch1.ausgabe());
console.log("Ausgabe addieren: "+add.ausgabe());
console.log("Ausgabe multiplizieren: "+mul.ausgabe());
//console.log("Erweitern: "+erwe.ausgabe());


let b=new BruchHelfer();
let kk=b.ggt(2,3);
console.log("Ausgabe ggt: "+kk);