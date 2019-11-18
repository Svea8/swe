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
        return temporaer;
    }

    aktuelleAnzahl(){
        let anzahl=this.punkteArray.length;

        return anzahl;
    }

    entfernungBerechnung(p,g){
        //let ka= new Punkt(p.x,p.y);
        //console.log(ka);
        let px = p.x;
        let py = p.y;
        let gx = g.x;
        let gy = g.y;
        let pyth =  (px-gx)*(px-gx)  + (py-gy)*(py-gy);
        let c= Math.sqrt(pyth);
        return c;
    }

    maximaleEntfernungBerechnen(){
        let max=0;
        for (let j=0; j<this.punkteArray.length;j++){
        for (let i=0; i<this.punkteArray.length-1; i++){
            let entf=this.entfernungBerechnung(this.punkteArray[i],this.punkteArray[j]);
            if(entf>max){
                max=entf;
            }}
            
        }
        return max;
    }

  /*  maximalEntferntePunkteBestimmen(){
        let max=0;
        let punkt1;
        let punkt2;
        for (let j=0; j<this.punkteArray.length;j++){
        for (let i=0; i<this.punkteArray.length-1; i++){
            let entf=this.entfernungBerechnung(this.punkteArray[i],this.punkteArray[j]);
            if(entf>max){
                max=entf;
                punkt1=this.punkteArray[i];
                punkt2=this.punkteArray[j];
            }}
            this.punkteArray.push(punkt1)
            this.punkteArray.push(punkt2);
        }
        return this.punkteArray; 
    }*/
}