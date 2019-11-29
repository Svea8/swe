

function ueberschriftAusgeben(){
    let inh=document.getElementById("h101");
    console.log(inh.innerHTML);
}

function kursivAusgeben(){
    let kur=document.getElementById("kursiv");
    let a=kur.children;
    console.log(a[0].innerHTML);
}

function absaetzeAusgeben(){
    let abs=document.getElementsByTagName('p');
    let string="";
    for (let i=0; i<abs.length; i++){
        string=string+abs[i].innerHTML;
    }
    console.log(string);
}

function anzahlAusgeben(){
    let abs=document.getElementsByTagName('p')
    console.log(abs.length);
}