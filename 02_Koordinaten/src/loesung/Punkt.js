class Punkt{

    //Konstruktor
    /*constructor(){
        this.x = 0;
        this.y = 0;
    }*/

    
    constructor(x=0,y=0){
        this.x = x;
        this.y = y;
    }

    toString(){
        let s="("+this.x+", "+this.y+")";
        return s;
    }
}