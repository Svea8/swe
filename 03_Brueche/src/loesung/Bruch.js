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
        let l= new BruchHelfer();

        let zaehler1=this.zaehler;
        let nenner1=this.nenner;
        let urBruch= new Bruch(zaehler1,nenner1);
        
        let zaehler2=bruch.zaehler;
        let nenner2=bruch.nenner;

        if(this.nenner==nenner2){
            let neuerBruch= new Bruch(zaehler1+zaehler2,nenner2);
            return neuerBruch;
        } 
        else{
            let zahl=l.kgv(nenner1,nenner2);
            
            bruch=bruch.erweitern(zahl);
            urBruch=urBruch.erweitern(zahl);

            let neuerBruch= new Bruch(bruch.zaehler+urBruch.zaehler,bruch.nenner);
            let zahl2=l.ggt(neuerBruch);
            neuerBruch= neuerBruch.kuerzen(zahl2);

            return neuerBruch;
        }
    }

    multiplizieren(bruch){
        let l= new BruchHelfer();
        
        let zaehler2=bruch.zaehler;
        let nenner2=bruch.nenner;
        
        let neuerBruch= new Bruch(this.zaehler*zaehler2,this.nenner*nenner2);
        let zahl2=l.ggt(neuerBruch);
        neuerBruch=neuerBruch.kuerzen(zahl2);

        return neuerBruch;
    }

    erweitern(zahl){
        this.zaehler=this.zaehler*zahl;
        this.nenner=this.nenner*zahl;

        let neuerBruch=new Bruch(this.zaehler,this.nenner);

        return neuerBruch;
    }

    kuerzen(zahl){
        this.zaehler=this.zaehler/zahl;
        this.nenner=this.nenner/zahl;

        let neuerBruch=new Bruch(this.zaehler,this.nenner);

        return neuerBruch;
    }
}