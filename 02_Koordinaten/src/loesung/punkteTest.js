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

let h1= l.punktHinzufuegen(1,2);
let h2= l.punktHinzufuegen(5,5);
let h3= l.punktHinzufuegen(1,7);
let h5= l.punktHinzufuegen(1,5);

let anz=l.aktuelleAnzahl();

console.log(anz);