function maxLaenge(text, laenge) {
   if (text != '' && text.length > laenge) {
      return false;
   }
   return true;
}

function minLaenge(text, laenge) {
    if (text == '' || text.length < laenge) {
       return false;
    }
    return true;
 }

function checkVorname(text) {
    return maxLaenge(text, 20);
}

function checkNachname(text) {
    return minLaenge(text, 3) && maxLaenge(text, 50);
}


function checkAll() {
    var vorname = document.getElementsByName("vorname")[0].value;  
    if (checkVorname(vorname)) {
        // was soll passieren, wenn kein Fehler auftritt?
    } else {
        // was soll im Fehlerfall passieren?
    }
    
    var nachname = document.getElementsByName("nachname")[0].value;  
    if (checkNachname(nachname)) {
        // was soll passieren, wenn kein Fehler auftritt?
    } else {
        // was soll im Fehlerfall passieren?
    }
}

