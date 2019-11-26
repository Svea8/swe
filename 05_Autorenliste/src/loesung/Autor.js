class Autor{
    constructor(vorname=null, nachname=null, geburtsjahr=-1, sterbejahr=-1){
        this.name= new Name(vorname,nachname);
        this.geburtsjahr=geburtsjahr;
        this.sterbejahr=sterbejahr;
    }

    toString(){
        let komName=this.name.toString();

        if (this.sterbejahr==-1 && this.geburtsjahr==-1){
            komName=komName+" * "+" *";
            return komName;
        }
        if (this.geburtsjahr==-1){
            komName= komName+" * "+this.sterbejahr;
            return komName;
        }
        if (this.sterbejahr==-1){
            komName=komName+" "+this.geburtsjahr+" *";
            return komName;
        }
        komName=komName+" "+this.geburtsjahr+" "+this.sterbejahr;
        return komName;
    }

    equals(autor){
        if( this.name.equals(autor.name)&&
            autor.geburtsjahr==this.geburtsjahr && 
            autor.sterbejahr==this.sterbejahr){
                return true;
            }
            return false;
    }

}