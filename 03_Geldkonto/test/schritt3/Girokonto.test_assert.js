describe('Teilaufgabe 3', function () {

	describe('Funktion Verzinsen', function () {
		//1. Schritt: Vorbeingung: Array anlegen
		let konto = new Girokonto();
		konto.einzahlen(1000);
		konto.zinssatz = 10;
		konto.dispolimit = -2000;
		konto.dispozinssatz = 50;

		//2. Schritt: zu testende Funktion aufrufen

		//3. Schritt: Ergebnisse prüfen
		it('verzinsen bei positivem Kontostand', function () {
			konto.verzinsen();
			console.log(konto.kontostand);
			chai.assert.equal(konto.kontostand, 1100, "Zinsen werden Falsch berechnet")
		});

		it('verzinsen bei negativem Kontostand', function () {
			konto.auszahlen(2100);
			konto.verzinsen()
			chai.assert.equal(konto.kontostand, -1500, "Zinsen werden Falsch berechnet")
		});

		//4. Schritt: Aufräumen
	});
});