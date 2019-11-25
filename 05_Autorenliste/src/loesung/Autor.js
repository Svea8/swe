class Autor{
    constructor(vorname=null, nachname=null, geburtsjahr=-1, sterbejahr=-1){
        this.name= new Name(vorname,nachname);
        this.geburtsjahr=geburtsjahr;
        this.sterbejahr=sterbejahr;
    }

    toString(){
        if (this.geburtsjahr==-1){
            this.geburtsjahr="*";
        }
        if (this.sterbejahr==-1){
            this.sterbejahr="*";
        }
        if (this.name.vorname==null){
            this.name.vorname="*";
        }
        if (this.name.nachname==null){
            this.name.nachname="*";
        }

        let komName=this.name.toString()+" "+this.geburtsjahr+" "+this.sterbejahr;
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