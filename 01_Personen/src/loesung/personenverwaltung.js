function arrayAnlegen(){
    let arr=[];
    return arr;
}

function arrayFuellen(a, laenge){
    for (let i=0; i<laenge; i++){
        a[i]=Person_Zufallsname_Zufallsalter.name;
    }
    return a;
}

function ausgabe(array){
    for (let i=0; i<5; i++){
        
    }
    console.log(array);
}

let arr=arrayAnlegen();
let a=arrayFuellen(arr, 5);
ausgabe(a);