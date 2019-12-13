let absaetze=document.getElementsByTagName('p');
let body=document.getElementsByTagName('body')[0]

function farbeAendern1(){
    for (let i=0; i<absaetze.length; i++){
        absaetze[i].style.background="red";
    }
}

function farbeAendern2(){
    for (let i=0; i<absaetze.length; i++){
        if(i==0||i==3||i==6||i==9){
            absaetze[i].style.background="red";  
        }
        else if(i==1||i==4||i==7){
            absaetze[i].style.background="green";  
        }
        else{
            absaetze[i].style.background="blue"; 
        }
    }
}

function absatzLoeschen(){
    if (absaetze.length>0){
        let l=absaetze[absaetze.length-1]
        body.removeChild(l);
    }
}