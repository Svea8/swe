let p1= new Punkt();
p1.x=24;
p1.y=18;

let p2= new Punkt();
p2.x=-3;
p2.y=-4;

let p3= new Punkt();
p3.x=8;
p3.y=-6;

let p4= new Punkt();
p4.x=-16;
p4.y=12;

let qua=p1.quadrant();
let ent=p1.entfernungVomUrsprung();

console.log("Der Punkt mit den Koordinaten "+p1.x+
" und "+p1.y+" liegt im "+qua+
".ten Quadranten. Seine Entfernung beträgt: "+ent);