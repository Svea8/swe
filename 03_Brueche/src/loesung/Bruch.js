class Bruch{
    constructor(za=0,ne=1){
        this.zaehler=za;
        this.nenner=ne;
    }

    bruch(zahl1,zahl2){

    }

    ausgabe(){
        let str="<"+this.zaehler+"> / <"+this.nenner+">";
        return str;
    }

    addieren(bruch){
        let zaehler2=bruch.zaehler;
        let nenner2=bruch.nenner;
        if(this.nenner==nenner2){
            let neuerBruch= new Bruch(this.zaehler+zaehler2,nenner2);
            return neuerBruch;
        }
    }

    multiplizieren(bruch){
        let zaehler2=bruch.zaehler;
        let nenner2=bruch.nenner;
            let neuerBruch= new Bruch(this.zaehler*zaehler2,this.nenner*nenner2);
            return neuerBruch;
    }

    erweitern(zahl){
        this.zaehler=this.zaehler*zahl;
        this.nenner=this.nenner*zahl;
    }

    kuerzen(zahl){
        this.zaehler=this.zaehler/zahl;
        this.nenner=this.nenner/zahl;
    }
}