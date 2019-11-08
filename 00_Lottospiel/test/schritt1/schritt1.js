describe("Lottospiel Test Schritt1", function() {
    describe("Zahleneingabe", function() {
        it("zahlenEingabe mit zahlenBereichMin", function() {
            chai.assert.isTrue(zahlenEingabe(zahlenBereichMin), "Zahl nicht erlaubt: " + zahlenBereichMin);
        });
        it("zahlenEingabe mit (zahlenBereichMin + 1", function() {
            chai.assert.isTrue(zahlenEingabe(zahlenBereichMin + 1), "Zahl nicht erlaubt: " + zahlenBereichMin + 1);
        });
        it("zahlenEingabe mit zahlenBereichMax", function() {
            chai.assert.isTrue(zahlenEingabe(zahlenBereichMax), "Zahl nicht erlaubt: " + zahlenBereichMax);
        });
        it("zahlenEingabe mit (zahlenBereichMax - 1)", function() {
            chai.assert.isTrue(zahlenEingabe(zahlenBereichMax - 1), "Zahl nicht erlaubt: " + zahlenBereichMax - 1);
        });
        it("zahlenEingabe mit (zahlenBereichMin - 1)", function() {
            chai.assert.isFalse(zahlenEingabe(zahlenBereichMin - 1), "Zahl erlaubt: " + zahlenBereichMin - 1);
        });
        it("zahlenEingabe mit (zahlenBereichMin - 15)", function() {
            chai.assert.isFalse(zahlenEingabe(zahlenBereichMin - 15), "Zahl erlaubt: " + zahlenBereichMin - 15);
        });
        it("zahlenEingabe mit (zahlenBereichMax + 1)", function() {
            chai.assert.isFalse(zahlenEingabe(zahlenBereichMax + 1), "Zahl erlaubt: " + zahlenBereichMax + 1);
        });
        it("zahlenEingabe mit (zahlenBereichMax + 100)", function() {
            chai.assert.isFalse(zahlenEingabe(zahlenBereichMax + 100), "Zahl erlaubt: " + zahlenBereichMax + 100);
        });
    });

    describe("Ausgabe", function() {
        it("Ausgabe sollte die eingegebenen Zahlen enthalten wenn sie korrekt sind", function() {
            zahlenEingabe(zahlenBereichMin);
            zahlenEingabe(zahlenBereichMin - 1);
            zahlenEingabe(zahlenBereichMax);
            zahlenEingabe(zahlenBereichMax + 1);

            chai.assert.notEqual(-1, tipp.indexOf(zahlenBereichMax), "Zahl wurde nicht in das Array eingefügt: " + zahlenBereichMax);
            chai.assert.notEqual(-1, tipp.indexOf(zahlenBereichMin), "Zahl wurde nicht in das Array eingefügt: " + zahlenBereichMin);
            chai.assert.equal(-1, tipp.indexOf(zahlenBereichMax + 1), "Zahl wurde in das Array eingefügt: " + zahlenBereichMax + 1);
            chai.assert.equal(-1, tipp.indexOf(zahlenBereichMin - 1), "Zahl wurde in das Array eingefügt: " + zahlenBereichMin - 1);

            chai.assert.notEqual(-1, ausgeben(true).indexOf(zahlenBereichMax), "Zahl ist nicht in der Ausgabe enthalten, obwohl sie im Tipp steht: " + zahlenBereichMax);
            chai.assert.notEqual(-1, ausgeben(true).indexOf(zahlenBereichMin), "Zahl ist nicht in der Ausgabe enthalten, obwohl sie im Tipp steht: " + zahlenBereichMin);
            chai.assert.equal(-1, ausgeben(true).indexOf(zahlenBereichMax + 1), "Zahl ist in der Ausgabe enthalten, obwohl sie nicht im Tipp steht: " + zahlenBereichMax + 1);
            chai.assert.equal(-1, ausgeben(true).indexOf(zahlenBereichMin - 1), "Zahl ist in der Ausgabe enthalten, obwohl sie nicht im Tipp steht: " + zahlenBereichMin - 1);
        });

        it("Array 'tipp' soll maximal die vorgegebene Länge haben", function() {
            tipp = new Array();
            let max = zahlenBereichMax;
            if((zahlenBereichMax - zahlenBereichMin) < zahlenAnzahl) {
                max = zahlenAnzahl + 1;
            }
            for (let i = zahlenBereichMin; i < max; i++) {
                zahlenEingabe(i);
            }

            chai.assert.equal(zahlenAnzahl, tipp.length, "Das Arry tipp hat die felsche Länge");
        })
    });

});