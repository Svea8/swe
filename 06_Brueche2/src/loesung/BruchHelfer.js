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
        while (((kv % x) != 0) && ((kv % y) != 0)){
            kv++;
        }
        return kv;
    }

    ggt(x,y){
        let gt;
        if(x>y){
            gt=x;
        }
        else{
            gt=y;
        }
        while (((x % gt) != 0) && ((y % gt) != 0)&&(gt<=0)){
            gt--;
        }
        return gt;
    }
}