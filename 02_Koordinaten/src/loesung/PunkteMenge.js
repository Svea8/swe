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
            this.punkteArray[i]=new Punkt();
            this.punkteArray[i].x= this.zufaelligeZahlErzeugen();
            this.punkteArray[i].y= this.zufaelligeZahlErzeugen();
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

    punktHinzufügen(a,b){  
        for (let i=0; i<5; i++){
            this.punkteArray[i]=new Punkt();
            this.punkteArray[i].x=a;
            this.punkteArray[i].y=b;
            return this.punkteArray[i];
        }
    }

    aktuelleAnzahl(){
        let anzahl=0;
        while (punktHinzufügen()!=int){
            anzahl++;

            
        }
        return anzahl;
    }

    entfernungBerechnung(p,b){

    }

    maximaleEntfernungBerechnen(){

    }

    maximalEntferntePunkteBestimmen(){

    }
}