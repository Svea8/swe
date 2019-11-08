console.log(zahlenBereichMax);
var tipps = document.getElementById("tipp");
var gezogen = document.getElementById("gezogen");

for (let i = zahlenBereichMin; i <= zahlenBereichMax; i++) {
    tipps.innerHTML += '<div onclick="eingabe(' + i + ')" class="check" id="nummer' + i + '">' + i + '</div>';
}
for (let i = zahlenBereichMin; i <= zahlenBereichMax; i++) {
    gezogen.innerHTML += '<div class="check" id="gezogen' + i + '">' + i + '</div>';
}

function eingabe(i) {
    let res = zahlenEingabe(i);
    if (res == false) {
        if (tipp.length == zahlenAnzahl) {
            alert("Keine Gültige Eingabe!\nDu hast schon " + zahlenAnzahl + " Zahlen gewählt!")
        } else {
            alert("Keine Gültige Eingabe!\nDie Zahl wurde schon gewählt!")
        }
    }
    mark();
    // if (tipp.length == zahlenAnzahl) {
    //     ziehen();
    // }
    // anzeigen();
}

function reset() {
    zuruecksetzen();
    mark();
    anzeigen();
    document.getElementById("erg").innerHTML = "";

}

function ziehen() {
    lottozahlenZiehen();
    anzeigen();

    for (i in lottozahlen) {
        if (tipp.indexOf(lottozahlen[i]) != -1) {
            document.getElementById("gezogen" + lottozahlen[i]).style.backgroundColor = "green";
        } else {
            document.getElementById("gezogen" + lottozahlen[i]).style.backgroundColor = "darkred";
        }
        document.getElementById("gezogen" + lottozahlen[i]).style.color = "white";
    }

    zeigeRichtige();
}

function zeigeRichtige() {
    document.getElementById("erg").innerHTML = richtigeZaehlen() + " Richtige";
}

function mark() {
    let boxen = document.getElementsByClassName("check");
    
    for (let i = 0; i < boxen.length; i++) {
        boxen[i].style.background = "none";
        boxen[i].style.color = "black";
    }

    for (i in tipp) {
        document.getElementById("nummer" + tipp[i]).style.backgroundColor = "darkred";
        document.getElementById("nummer" + tipp[i]).style.color = "white";
    }
}

function anzeigen() {
    document.getElementById("gewaehlt").innerHTML = "Gewählte Zahlen:" + ausgeben(true);
    document.getElementById("ziehung").innerHTML = "Gezogene Zahlen:" + ausgeben();

}