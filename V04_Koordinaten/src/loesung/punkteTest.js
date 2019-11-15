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



function ausgabe(){
    let parr=[p1,p2,p3,p4]
    for (let i=0; i<parr.length; i++){

        let qua=parr[i].quadrant();
        let ent=parr[i].entfernungVomUrsprung();
console.log("Der Punkt mit den Koordinaten "+parr[i].x+
" und "+parr[i].y+" liegt im "+qua+
".ten Quadranten. Seine Entfernung beträgt: "+ent);}}

ausgabe();