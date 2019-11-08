b1= new Buch();
b2= new Buch();
b3= new Buch();
b4= new Buch();
b5= new Buch();
b6= new Buch();
b7= new Buch();

b1.autor="Max Frisch";
b1.titel="Andorra";
b1.seitenAnzahl=200;
b1.preis=9.99;

b2.autor="Max Frisch";
b2.titel="Homo Faber";
b2.seitenAnzahl=300;
b2.preis=12.99;

b3.autor="Max Frisch";
b3.titel="Stiller"; 
b3.seitenAnzahl=500, 
b3.preis=19.99;

b4.autor="Martin Suter";
b4.titel="Elefant";
b4.seitenAnzahl=200;
b4.preis=9.99;

b5.autor="Friedrich Dürrenmatt";
b5.titel="Die Physiker";
b5.seitenAnzahl=250;
b5.preis=9.95;

b6.autor="John Irving";
b6.titel="Owen Meany";
b6.seitenAnzahl=800;
b6.preis=29.99;

b7.autor="Martin Suter";
b7.titel="Small World";
b7.seitenAnzahl=350;
b7.preis=15.99;


let warenkorb= new Array();
warenkorb=[b1,b3,b6];

//Gesamtpreis berechnen
function gesamtPreis(){
    let gesamt=0;

    for (let i=0; i<warenkorb.length; i++){
        gesamt=gesamt+warenkorb[i].preis; 
    }
        console.log("Gesamtpreis: "+gesamt);
    }

//Umwandlung in String
let ware=[];
for (let i=0; i<warenkorb.length; i++){
    ware[i]=warenkorb[i].toString();  
}
console.log("Alle Bücher im Warenkorb: "+ware);

//günstigstes Buch suchen
function guenstigstesBuch(){
    let min=1000.00;
    let mName="";
    for (let i=0; i<warenkorb.length; i++){
        if (warenkorb[i].preis<min){
            min=warenkorb[i].preis;
            mName=warenkorb[i].toString();
        }
    }
        console.log("Günstigstes Buch: "+mName);
    }

//dickstes Buch suchen    
function dickstesBuch(){
    let dick=0;
    let dName="";
    for (let i=0; i<warenkorb.length; i++){
        if (warenkorb[i].seitenAnzahl>dick){
            dick=warenkorb[i].seitenAnzahl;
            dName=warenkorb[i].toString();
        }
    } 
       console.log("Dickstes Buch: "+dName);
    }

//Funktionsaufrufe
guenstigstesBuch(warenkorb);
dickstesBuch(warenkorb);
gesamtPreis(warenkorb);