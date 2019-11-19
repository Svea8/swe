class BruchHelfer{
    constructor(){

    }

    kgv(x,y){
        let kv;
        if(x>y){
            kv=x;
        }
        else{
            kv=y;
        }
        while (((kv % x) == 0) && ((kv % y) == 0)){
            kv++;
        }
        return kv;
    }

    ggt(x,y){

    }
}