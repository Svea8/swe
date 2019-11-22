let a=[];
a[1] = new Autor("Frisch",1911);
a[2] = new Autor ("Dürrenmatt",1921);
a[3] = new Autor(new String("Frisch"), 1911);
a[4] = new Autor(new String("Frisch"), 1911);




for (let i=3; i<5; i++){
    for (let j=3; j<5; j++){
        if (i!=j && j<i){
        console.log("Vergleich von a"+j+" und a"+i+": Autoren "
        +a[j]+" und "+a[i]+" sind "+a[i].equals(a[j]));
        }
    }
}