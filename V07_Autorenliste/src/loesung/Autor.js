class Autor{



    constructor(nachname=null, geburtsjahr=-1){
        this.nachname=nachname;
        this.geburtsjahr=geburtsjahr;
    }

    equals(a){
        let vergleich="";
        let b=a.nachname;
        if (this.geburtsjahr==a.geburtsjahr && this.nachname==b){
            vergleich="gleich";
            return vergleich;
        }
        else{
            vergleich="nicht gleich";
            return vergleich;
        }
    }
    toString(){
        let ausgabe="";
        ausgabe= this.nachname+"("+this.geburtsjahr+")"
        return ausgabe;
    }

}