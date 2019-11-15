class Punkt{

    constructor(){
        this.x=0;
        this.y=0;
    }

    quadrant(){
        let q;
        if(this.x>0 && this.y>0){
            q=1;
            return q;
        }
        else if(this.x<0&&this.y>0){
            q=2;
            return q;
        }
        else if(this.x<0&&this.y<0){
            q=3;
            return q;
        }
        else if(this.x>0&&this.y<0){
            q=4;
            return q;
        }
        else {
            q="Ursprung";
            return q;
        }
    }

    entfernungVomUrsprung(){
        let a= this.x;
        let b=this.y;
        let c;
        let py=(a*a)+(b*b);
        c= Math.sqrt(py);
        return c;
    }
}