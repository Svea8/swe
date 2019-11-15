class PunkteMenge{
    //Konstruktor
    constructor(){
        this.punkteArray=[];
    }

    //Methoden
    zufaelligeZahlErzeugen(){
        this.zufallZ=Math.round((Math.random()*40)-20);
        return this.zufallZ;
    }

    zufaelligePunkteErzeugen(){
        for (let i=0; i<20; i++){
            this.punkteArray[i]=new Punkt(this.zufaelligeZahlErzeugen(),this.zufaelligeZahlErzeugen());
        }
        return this.punkteArray;
    }

    allePunkteAusgeben(){
        let gesamt="";
        for (let i=0; i<20; i++){
            gesamt=gesamt+this.zufaelligePunkteErzeugen()[i].toString();
        }
        return gesamt;
    }

    punktHinzufuegen(a,b){  
        let temporaer=new Punkt(a,b);
        this.punkteArray.push(temporaer);
    }

    aktuelleAnzahl(){
        let anzahl=this.punkteArray.length;

        return anzahl;
    }

   /* entfernungBerechnung(p,g){
        let px = this.p.x;
        let py = this.p.y;
        let gx = this.g.x;
        let gy = this.g.y;
        let pyth =  (px-gx)*(px-gx)  + (py-gy)*(py-gy);
        c= Math.sqrt(py);
        return c;
    }*/

    maximaleEntfernungBerechnen(){

    }

    maximalEntferntePunkteBestimmen(){

    }
}