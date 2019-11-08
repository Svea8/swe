
	describe('Teilaufgabe 2', function () {

		describe('Funktion Einzahlen', function () {
			//1. Schritt: Vorbeingung: Array anlegen
			let konto = new Girokonto();

			//3. Schritt: Ergebnisse prüfen
			it('Funktion speichert und rechnet richtig', function () {
				konto.einzahlen(1);
				chai.assert.equal(konto.kontostand, 1, "einzahlen() speichert Übergebenen Wert nicht.");
			});
			it('Funktion erlaubt keine Negativbeträge', function () {
				konto.einzahlen(-2000);
				chai.assert.equal(konto.kontostand, 1, "einzahlen() erlaubt Negativbeträge");
			});

			//4. Schritt: Aufräumen
		});
		describe('Funktion Auszahlen', function () {
			//1. Schritt: Vorbeingung: Array anlegen
			let konto = new Girokonto();

			//2. Schritt: zu testende Funktion aufrufen
			konto.einzahlen(200);
			konto.dispolimit = 100;

			//3. Schritt: Ergebnisse prüfen
			it('Funktion speichert und rechnet richtig', function () {
				konto.auszahlen(1);
				chai.assert.equal(konto.kontostand, 199, "auszahlen() berechnet Betrag falsch.");

			});
			it('Funktion erlaubt keine Negativbeträge', function () {
				konto.auszahlen(-1);
				chai.assert.equal(konto.kontostand, 199, "auszahlen() erlaubt Negativbeträge.");
				konto.auszahlen(100);
				//Test ob Funktion nichts macht wenn Dispo unterschritten wird.
				chai.assert.equal(konto.kontostand, 199, "auszahlen() erlaubt Ausgabe unter Dispolimit.");
			});
			it('Funktion verhindert unterschreiten des Dispolimits', function () {
				konto.auszahlen(100);
				//Test ob Funktion nichts macht wenn Dispo unterschritten wird.
				chai.assert.equal(konto.kontostand, 199, "auszahlen() erlaubt Ausgabe unter Dispolimit.");
			});

			//4. Schritt: Aufräumen
		});
	});