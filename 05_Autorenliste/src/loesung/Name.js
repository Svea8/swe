class Name{
    constructor(vorname=null, nachname=null){
        this.vorname=vorname;
        this.nachname=nachname;
    }

    equals(name){
        let vn1=this.vorname;
        let nn1=this.nachname;
        let vn2=name.vorname;
        let nn2=name.nachname;
        if ((vn1==vn2 && nn1==nn2)){
            return true;
        }

        return false;
    }

    toString(){
        if (this.nachname==null && this.vorname==null){
            let komName=" ";
            return komName;
        }        
        if (this.vorname==null){
            let komName=this.nachname;
            return komName;  
        }
        if (this.nachname==null){
            let komName=this.vorname;
            return komName;
        }

        let komName=this.vorname+" "+this.nachname;
        return komName;
    }

}