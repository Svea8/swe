let farben = '{"konfig": {"farbe" : "rgb(0, 0, 255)", "schrift": "rgb(255, 0, 0)"}}';

let txtFarben=JSON.parse(farben);

let body= document.getElementById("body");
body.style.backgroundColor=txtFarben.konfig.farbe;
body.style.color=txtFarben.konfig.schrift;