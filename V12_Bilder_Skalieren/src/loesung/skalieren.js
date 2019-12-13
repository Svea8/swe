let bild=document.getElementById("bild");
let rahmen=document.getElementById("rahmen");
let bild2=rahmen.getElementsByTagName("img")[0];

function aufBild(){
    bild.style.width="80%";
}

function ausBild(){
    bild.style.width="30%";
}

function zoomIn(){
    rahmen.style.overflow="hidden";
    bild2.style.width="150%";
    bild2.style.bottom="25%";
    bild2.style.right="25%";
}

function zoomOut(){
    
    bild2.style.bottom="0%";
    bild2.style.right="0%";
    bild2.style.width="100%";
}