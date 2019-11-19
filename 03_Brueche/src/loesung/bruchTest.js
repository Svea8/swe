let bruch1= new Bruch(1,2);
let bruch2= new Bruch(4,2);

//let erwe= bruch1.erweitern(6);
//let kür= bruch1.kuerzen(2);

let add= bruch1.addieren(bruch2);
let mul= bruch2.multiplizieren(bruch2);

console.log(bruch1.ausgabe());
console.log(add.ausgabe());
console.log(mul.ausgabe());


let b=new BruchHelfer();
let kk=b.kgv(8,2);
console.log(kk);