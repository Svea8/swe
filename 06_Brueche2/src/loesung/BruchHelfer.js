
function kgv(x,y){
    let kv;
    if(x>y){
        kv=x;
    }
    else{
        kv=y;
    }
    while (((kv % x) != 0) || ((kv % y) != 0)){
        kv++;
    }
    return kv;
}

function ggt(x,y){
    let gt;
    if(x>y){
        gt=x;
    }
    else{
        gt=y;
    }
    while (((x % gt) != 0) || ((y % gt) != 0)&&(gt<=0)){
        gt--;
    }
    return gt;
}

function bruchNegieren(bruch){
    bruch.zaehler=bruch.zaehler*(-1);
    bruch.nenner=bruch.nenner*(-1);
    return bruch;
}

function kehrwert(bruch){
    let neuZaehler=bruch.nenner;
    let neuNenner=bruch.zaehler;

    bruch.nenner=neuNenner;
    bruch.zaehler=neuZaehler;
    return bruch;
}
