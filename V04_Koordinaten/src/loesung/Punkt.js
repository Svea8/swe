class Punkt{

    //Konstruktor
    /*constructor(){
        this.x = 0;
        this.y = 0;
    }
*/
    
     constructor(x=0,y=0){
        this.x = x;
        this.y = y;
    }
    

    //Quadrant Methode
    quadrant(){
        let q;
        if(this.x > 0 && this.y > 0){
            q = 1;
            return q;
        }
        else if(this.x < 0 && this.y > 0){
            q = 2;
            return q;
        }
        else if(this.x < 0 && this.y < 0){
            q = 3;
            return q;
        }
        else if(this.x > 0 && this.y < 0){
            q = 4;
            return q;
        }
        else {
            q = 0;
            return q;
        }
    }

    // Entfernung vom Ursprung Methode
    entfernungVomUrsprung(){
        let a = this.x;
        let b = this.y;
        let c;
        let py = (a*a) + (b*b);
        c= Math.sqrt(py);
        return c;
    }
}