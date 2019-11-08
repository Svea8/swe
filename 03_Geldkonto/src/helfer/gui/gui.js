let logCount = 0;


var konto;
try {
    konto = new Girokonto();
} catch (error) {
    addLog("Fehler beim Erstellen des Kontos mit Standardparametern.", "red", error.message);
}
var einzahlenButton = document.getElementsByName("EinzahlenOK")[0];
var auszahlenButton = document.getElementsByName("AuszahlenOK")[0];
var verzinsenButton = document.getElementsByName("Verzinsen")[0];
var zinssatzButton = document.getElementsByName("ZinssatzOK")[0];
var dispozinssatzButton = document.getElementsByName("DispozinssatzOK")[0];
var dispolimitButton = document.getElementsByName("DispolimitOK")[0];
var neuesKonto = document.getElementsByName("neuesKonto")[0];

try {
    showKontoData();
} catch (error) {
    addLog("Fehler:", "red", error);
}

function showKontoData() {
    let h2b = document.getElementsByTagName("h2")[0].getElementsByTagName("b")[0];

    h2b.innerHTML = konto.besitzer;


    let ausgabe = document.getElementById("ausgabe");
    let bs = ausgabe.getElementsByTagName("b");

    /* Testblock */
    if (testGetter()) {
        bs[0].innerHTML = konto.besitzer;

        bs[4].innerHTML = konto.dispolimit;

        bs[3].innerHTML = konto.dispozinssatz;

        bs[1].innerHTML = konto.kontostand.toFixed(2);

        bs[2].innerHTML = konto.zinssatz;
    }

    if (konto.kontostand < 0) {
        bs[1].style.color = "red";
        bs[2].style.color = "black";
        bs[3].style.color = "red";
    } else {
        bs[1].style.color = "black";
        bs[2].style.color = "green";
        bs[3].style.color = "black";
    }
}

einzahlenButton.onclick = function () {
    let einzahlenInput = document.getElementsByName("Einzahlen")[0];
    let value = parseFloat(einzahlenInput.value);
    if (!isNaN(value) && value > 0) {
        konto.einzahlen(value);
        showKontoData();
    } else {
        errorHandling(einzahlenInput);
    }
}

auszahlenButton.onclick = function () {
    let auszahlenInput = document.getElementsByName("Auszahlen")[0];
    let value = parseFloat(auszahlenInput.value);
    if (!isNaN(value) && value > 0) {
        if (konto.kontostand - value <= konto.dispolimit) {
            errorHandling(document.getElementById("dl"));

            errorHandling(auszahlenInput);
        } else {
            konto.auszahlen(value);
            showKontoData();

        }
    } else {
        errorHandling(auszahlenInput);
    }
}

verzinsenButton.onclick = function () {
    konto.verzinsen();
    showKontoData();
}

zinssatzButton.onclick = function () {
    let input = document.getElementsByName("Zinssatz")[0];
    let value = parseFloat(input.value);
    if (!isNaN(value)) {
        konto.zinssatz = value;
        showKontoData();
    } else {
        errorHandling(input);
    }
}

dispozinssatzButton.onclick = function () {
    let input = document.getElementsByName("Dispozinssatz")[0];
    let value = parseFloat(input.value);
    if (!isNaN(value)) {
        konto.dispozinssatz = value;
        showKontoData();
    } else {
        errorHandling(input);
    }
}

dispolimitButton.onclick = function () {
    let input = document.getElementsByName("Dispolimit")[0];
    let value = parseFloat(input.value);
    if (!isNaN(value)) {
        konto.dispolimit = value;
        showKontoData();
    } else {
        errorHandling(input);
    }
}

neuesKonto.onclick = function () {
    let container = document.getElementById("neuesKonto");

    let besitzerInput = document.getElementsByName("besitzer")[0];
    let dispozinssatzInput = document.getElementsByName("dispozinssatz")[0];
    let zinssatzInput = document.getElementsByName("zinssatz")[0];
    let dispolimitInput = document.getElementsByName("dispolimit")[0];

    let besitzerValue = besitzerInput.value;
    let dispozinssatzValue = parseFloat(dispozinssatzInput.value);
    let zinssatzValue = parseFloat(zinssatzInput.value);
    let dispolimitValue = parseFloat(dispolimitInput.value);
    if (besitzerValue != "") {
        if (!isNaN(zinssatzValue) && zinssatzValue != "") {
            if (!isNaN(dispolimitValue) && dispolimitValue != "") {
                if (!isNaN(dispozinssatzValue) && dispozinssatzValue != "") {
                    konto = new Girokonto(besitzerValue, zinssatzValue, dispolimitValue, dispozinssatzValue);
                    showKontoData();
                    addLog("Neues Konto erstellt.", "green")
                    if (testGetter()) {
                        container.style.display = "none";
                    }
                } else {
                    errorHandling(dispozinssatzInput);
                }
            } else {
                errorHandling(dispolimitInput);
            }
        } else {
            errorHandling(zinssatzInput);
        }
    } else {
        errorHandling(besitzerInput);
    }
}


function errorHandling(input) {
    input.classList.add("inputFehler");
    setTimeout(function () {
        input.classList.remove("inputFehler");
        input.value = "";
    }, 1000);
}

function addLog(text, color = "black", message = -1) {
    log = document.getElementById("log");
    let logP = log.getElementsByTagName("p");
    let p = document.createElement("p");
    p.innerHTML = "[" + logCount + "] > " + text + " ";
    p.style.color = color;

    if (message != -1) {
        let b = document.createElement("b");
        b.innerText = message;
        p.appendChild(b);
    }

    log.appendChild(p);
    logCount++;
}

function testGetter() {
    let test = [];
    if (konto.besitzer == undefined) {
        addLog("get besitzer() existiert nicht", "red", -1);
        test.push(true);
    } else {
        test.push(false);
    }

    if (konto.dispolimit == undefined) {
        addLog("get dispolimit() existiert nicht", "red", -1);
        test.push(true);
    } else {
        test.push(false);
    }

    if (konto.dispozinssatz == undefined) {
        addLog("get dispozinssatz() existiert nicht", "red", -1);
        test.push(true);
    } else {
        test.push(false);
    }

    if (konto.kontostand == undefined) {
        addLog("get kontostand() existiert nicht", "red", -1);
        test.push(true);
    } else {
        test.push(false);
    }
    if (konto.zinssatz == undefined) {
        addLog("get zinssatz() existiert nicht", "red", -1);
        test.push(true);
    } else {
        test.push(false);
    }

    return !test.includes(true);
}
