describe("Lottospiel Test Schritt 3", function() {
    describe("Richtige zählen", function() {
        it("zahlenEingabe sollte korrekt funktionieren", function() {
            chai.assert.equal(richtigeTest(), richtigeZaehlen(), "Die Anzahl der richtigen Zahlen stimmt nicht!");
        });
    });

    describe("Zurücksetzen", function() {
        it("'tipp' und 'lottozahlen' soll zurückgesetzt werden", function() {
            zuruecksetzen();
            chai.assert.isArray(tipp, "'tipp' wurde nicht als Array initialisiert!");
            chai.assert.isArray(lottozahlen, "'lottozahlen' wurde nicht als Array initialisiert!");
            chai.assert.equal(0, tipp.length, "'tipp' hat nach dem Zurücksetzen nicht die Länge 0!");
            chai.assert.equal(0, lottozahlen.length, "'lottozahlen' hat nach dem Zurücksetzen nicht die Länge 0!");
        })
    });
});

function richtigeTest() {
    let richtige = 0;
    for (let i in tipp) {
        if (lottozahlen.indexOf(tipp[i]) != -1) {
            richtige++;
        }
    }
    return richtige;
}