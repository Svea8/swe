class Bruch{
    constructor(za=0,ne=1){
        this.zaehler=za;
        this.nenner=ne;
    }


    ausgabe(){
        let str="<"+this.zaehler+"> / <"+this.nenner+">";
        return str;
    }

    addieren(bruch){

        if(this.nenner==bruch.nenner){
            this.zaehler= this.zaehler+bruch.zaehler;
        } 
        else{
            let zahl=kgv(this.nenner,bruch.nenner);
            
            bruch=bruch.erweitern(zahl);
            let newBruch=this.erweitern(zahl);

            this.zaehler= this.zaehler+bruch.zaehler;
            let zahl2=ggt(this);
            newBruch=this.kuerzen(zahl2);  
            this.nenner=newBruch.nenner;
            this.zaehler=newBruch.zaehler;
        }
        let newBruch=this;
        return newBruch;
    }
  
    multiplizieren(bruch){
        let zaehler2=bruch.zaehler;
        let nenner2=bruch.nenner;
        
        this.zaehler=this.zaehler*zaehler2;
        this.nenner=this.nenner*nenner2;
        let zahl2=ggt(bruch.zaehler,bruch.nenner);
        bruch=bruch.kuerzen(zahl2);

        return bruch;  
    }

    erweitern(zahl){
        this.zaehler=this.zaehler*zahl;
        this.nenner=this.nenner*zahl;
        let newBruch=this;
        return newBruch;
    }

    kuerzen(zahl){
        this.zaehler=this.zaehler/zahl;
        this.nenner=this.nenner/zahl;
        let newBruch=this;
        return newBruch;
    }

    subtrahieren(bruch){
        let zuNegBruch=new Bruch(bruch.zaehler,bruch.nenner);
        let negBruch=bruchNegieren(zuNegBruch);
        let newBruch=this;
        newBruch=newBruch.addieren(negBruch);
        return newBruch;
    }

    dividieren(bruch){
        let bruchKehrwert=new Bruch(bruch.zaehler,bruch.nenner);
        bruchKehrwert=kehrwert(bruchKehrwert);

        let divBruch=new Bruch(bruch.zaehler,bruch.nenner);
        let newBruch=divBruch.multiplizieren(bruchKehrwert);
        return newBruch;
    }
}