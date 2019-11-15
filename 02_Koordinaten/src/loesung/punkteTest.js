let p1 = new Punkt();
p1.x = 2;
p1.y = 3;

let p2 = new Punkt();
p2.x = 5;
p2.y = 7;

let p3 = new Punkt();
p3.x = 4;
p3.y = 1;

let p4 = new Punkt();
p4.x = 9;
p4.y = 3;

let p5 = new Punkt();
p5.x = 1;
p5.y = 3;

let string = p1.toString();
//console.log(string);

let l= new PunkteMenge();
//let m=l.allePunkteAusgeben();
//console.log(m);

let h1= l.punktHinzufügen(1,2);
let h3= l.punktHinzufügen(1,7);
let h5= l.punktHinzufügen(1,5);

let anz=l.aktuelleAnzahl();

console.log(anz);