describe("Lottospiel Test Schritt2", function() {
    describe("Zufallszahl", function() {
        it("Lottozahlen ziehen - Test 1", function() {
            lottozahlen = new Array();
            lottozahlenZiehen();
            chai.assert.isArray(lottozahlen, "Die Variable 'lottozahlen' ist kein Array!");
            chai.assert.equal(zahlenAnzahl + 1, lottozahlen.length, "Es wurden nicht " + (zahlenAnzahl + 1) + " Zahlen gezogen!");;
            chai.assert.isFalse(duplikate(lottozahlen), "in 'lottozahlen' sind Duplikate enthalten!");
        });
        it("Lottozahlen ziehen - Test 2", function() {
            lottozahlen = new Array();
            lottozahlenZiehen();
            chai.assert.isArray(lottozahlen, "Die Variable 'lottozahlen' ist kein Array!");
            chai.assert.equal(zahlenAnzahl + 1, lottozahlen.length, "Es wurden nicht " + (zahlenAnzahl + 1) + " Zahlen gezogen!");;
            chai.assert.isFalse(duplikate(lottozahlen), "in 'lottozahlen' sind Duplikate enthalten!");
        });
        it("Lottozahlen ziehen - Test 3", function() {
            lottozahlen = new Array();
            lottozahlenZiehen();
            chai.assert.isArray(lottozahlen, "Die Variable 'lottozahlen' ist kein Array!");
            chai.assert.equal(zahlenAnzahl + 1, lottozahlen.length, "Es wurden nicht " + (zahlenAnzahl + 1) + " Zahlen gezogen!");;
            chai.assert.isFalse(duplikate(lottozahlen), "in 'lottozahlen' sind Duplikate enthalten!");
        });
    });

});

function duplikate(a) {
    for(let i = 0; i < a.length-1; i++) {
        let temp = a[i];
        for(let j = i+1; j < a.length; j++) {
            if (temp == a[j]) {
                return true;
            }
        }
    }
    return false;
}