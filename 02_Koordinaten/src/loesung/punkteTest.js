let p1 = new Punkt(2,3);
let p2 = new Punkt(5,7);
let p3 = new Punkt(4,1);
let p4 = new Punkt(9,3);
let p5 = new Punkt(1,3);
let string = p1.toString();


let l= new PunkteMenge();


//neue Punkte hinzufügen
let h3= l.punktHinzufuegen(-5,0);
let h5= l.punktHinzufuegen(10,0);
let h1= l.punktHinzufuegen(0,0);
let h2= l.punktHinzufuegen(3,0);

//Neue Variablendefinition der Methoden
let anz=l.aktuelleAnzahl();
//let entf=l.entfernungBerechnen(h1,h2);
let maxentf=l.maximaleEntfernungBerechnen();
let maxentfbest=l.maximalEntferntePunkteBestimmen();
//let m=l.allePunkteAusgeben();

//Konsolenausgaben
//console.log(h1);
//console.log(m);
console.log(maxentfbest);
//console.log(string);