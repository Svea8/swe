function ajaxAufruf(){
    let ajax = new XMLHttpRequest();
    if(ajax!=null) {
        ajax.open("POST", "../helfer/farben.php");
        ajax.onreadystatechange = function(){
            if(this.readyState == 4){
                if(this.status == 200){
                    farbenZufaelligAendern(this.responseText);//statt anzeige farbeaendern aufrufen
                }
                else{
                    alert(this.statusText);
                }
            }
        }
        ajax.send(null);
    }
    else {
        alert("Ihr Browser unterstützt kein Ajax!");
    }
}

function farbeAendern(b){
    let txtFarben=JSON.parse(b);
    let body= document.getElementById("body");
    body.style.backgroundColor=txtFarben.konfig.farbe;
    body.style.color=txtFarben.konfig.schrift;
}

function farbenZufaelligAendern(a){
    let far=JSON.parse(a);
    let body= document.getElementById("body");
    body.style.backgroundColor=far.konfig.farbe;
    body.style.color=far.konfig.schrift;
}