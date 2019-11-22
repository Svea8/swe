class Autor{
    constructor(vorname=null, nachname=null, geburtsjahr=-1, sterbejahr=-1){
        this.name= new Name(vorname,nachname);
        this.geburtsjahr=geburtsjahr;
        this.sterbejahr=sterbejahr;
    }

}