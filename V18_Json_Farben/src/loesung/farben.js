let farben = '{"konfig": {"farbe" : "rgb(0, 0, 0)", "schrift": "rgb(255, 255, 200)"}}';

let txtFarben=JSON.parse(farben);

let body= document.getElementById("body");

function farbeAendern(){
body.style.backgroundColor=txtFarben.konfig.farbe;
body.style.color=txtFarben.konfig.schrift;}