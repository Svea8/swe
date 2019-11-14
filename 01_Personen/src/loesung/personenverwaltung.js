function arrayAnlegen(){
    let arr=[];
    return arr;
}

function arrayFuellen(a, laenge){
    for (let i=0; i<laenge; i++){
        let p = new Person_Zufallsname_Zufallsalter();
        a[i]=p.name;
    }
    return a;
}

function ausgabe(array){
    let ausg=[];
    let zusammen="";
    for (let i=0; i<array.length; i++){
        ausg[i]=array[i].toString();
        zusammen=zusammen+ausg[i]+", ";
        
    }
console.log(zusammen);
}

let arr=arrayAnlegen();

let a=arrayFuellen(arr, 7);
ausgabe(a);

//Test