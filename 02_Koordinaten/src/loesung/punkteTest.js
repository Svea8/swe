let p1 = new Punkt(2,3);
let p2 = new Punkt(5,7);
let p3 = new Punkt(4,1);
let p4 = new Punkt(9,3);
let p5 = new Punkt(1,3);
let string = p1.toString();
//console.log(string);

let l= new PunkteMenge();
//let m=l.allePunkteAusgeben();
//console.log(m);

let h3= l.punktHinzufuegen(-5,0);
let h5= l.punktHinzufuegen(10,0);
let h1= l.punktHinzufuegen(0,0);
let h2= l.punktHinzufuegen(3,0);


let anz=l.aktuelleAnzahl();
//let entf=l.entfernungBerechnung(h1,h2);
let maxentf=l.maximaleEntfernungBerechnen();
//let maxentfbest=l.maximalEntferntePunkteBestimmen();

//console.log(h1);
console.log(maxentf);