
function ueberschriftAendern(){
    let neuUeb=document.getElementsByTagName('h1');
    neuUeb[0].innerHTML="Meine neue";
}

function hintergrundEinfaerben(){
    let body=document.getElementById("id1");
    body.style.background="cyan";
}

function tabelleEinfaerben(){
    let row=document.getElementsByClassName("row");

    for (let i=0; i<5; i++){

        row[i].children[i].style.background="red";

    }
}
    
