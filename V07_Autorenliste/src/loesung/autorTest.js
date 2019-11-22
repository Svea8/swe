//Array Befüllung
let a=[];
a[1] = new Autor("Frisch",1911);
a[2] = new Autor ("Dürrenmatt",1921);
a[3] = new Autor(new String("Frisch"), 1911);
a[4] = new Autor(new String("Frisch"), 1911);



//Schleife für die Konsolenausgabe
for (let i=1; i<5; i++){
    for (let j=1; j<5; j++){
        if (i!=j && j<i){
            let vergleich;
            if(a[i].equals(a[j])){
               vergleich="gleich";
            }
            else{
                vergleich="nicht gleich";
            }

            console.log("Vergleich von a"+j+" und a"+i+": Autoren "
            +a[j]+" und "+a[i]+" sind "+vergleich);
        }
    }
}
