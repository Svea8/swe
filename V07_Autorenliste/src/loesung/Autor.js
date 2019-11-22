class Autor{

    constructor(nachname=null, geburtsjahr=-1){
        this.nachname=nachname;
        this.geburtsjahr=geburtsjahr;
    }

    equals(a){
        let b=a.nachname.valueOf();
        if (this.geburtsjahr==a.geburtsjahr && this.nachname==b){
            return true;
        }
        else{
            return false;
        }
    }
    toString(){
        let ausgabe="";
        ausgabe= this.nachname+"("+this.geburtsjahr+")"
        return ausgabe;
    }

}