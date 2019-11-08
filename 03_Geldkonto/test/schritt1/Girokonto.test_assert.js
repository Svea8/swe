describe('Teilaufgabe 1', function () {

	describe('Private Attribute, Getter und Setter', function () {
		it('Klasse Girokonto', function () {
			let konto = new Girokonto();
			chai.assert.exists(konto, "Es wurde kein Objekt der Klasse Girokonto erstellt!");
			chai.assert.isObject(konto, "Klasse Girokonto ist nicht als Objekt angelegt.")
		});
		it('Standardwerte im Constructor', function () {
			let konto = new Girokonto();
			chai.assert.typeOf(konto._besitzer, 'string', "Das Attribut this._besitzer ist kein String.");
			chai.assert.equal(konto._besitzer, "Kein Name angegeben", "Das Attribut this._besitzer ist kein String.");
			chai.assert.typeOf(konto._kontostand, 'number', "Das Attribut this._kontostand ist keine Zahl.");
			chai.assert.equal(konto._kontostand, 0, "Der Wert des Attributs this._kontostand ist nicht 0.");
			chai.assert.typeOf(konto._zinssatz, 'number', "Das Attribut this._zinssatz ist keine Zahl.");
			chai.assert.equal(konto._zinssatz, 0.5, "Das Attribut this._zinssatz ist nicht 0.5.");
			chai.assert.typeOf(konto._dispolimit, 'number', "Das Attribut this._dispolimit ist keine Zahl.");
			chai.assert.equal(konto._dispolimit, -500, "Das Attribut this._dispolimit ist nicht -500.");
			chai.assert.typeOf(konto._dispozinssatz, 'number', "Das Attribut this._dispozinssatz ist keine Zahl.");
			chai.assert.equal(konto._dispozinssatz, 2, "Das Attribut this._dispozinssatz ist nicht 2.");
		});
		it('Übergebene Werte im Constructor', function () {
			let konto = new Girokonto("TestName", 2, 4, 6);
			chai.assert.equal(konto._besitzer, 'TestName', "Der übergebene Wert für das Attribut this._besitzer wird nicht richtig gespeichert.");
			chai.assert.typeOf(konto._kontostand, 'number', "Das Attribut this._kontostand ist keine Zahl.");
			chai.assert.equal(konto._kontostand, 0, "Der Wert des Attributs this._kontostand ist nicht 0.");
			chai.assert.equal(konto._zinssatz, 2, "Der übergebene Wert für das Attribut this._zinssatz wird nicht richtig gespeichert.");
			chai.assert.equal(konto._dispolimit, 4, "Der übergebene Wert für das Attribut this._dispolimit wird nicht richtig gespeichert.");
			chai.assert.equal(konto._dispozinssatz, 6, "Der übergebene Wert für das Attribut this._dispozinssatz wird nicht richtig gespeichert.");
		});
		it('Attribute der Klasse Girokonto', function () {
			let konto = new Girokonto();
			chai.assert.exists(konto._besitzer, "Das Attribut this._besitzer fehlt!");
			chai.assert.exists(konto._kontostand, "Das Attribut this._kontostand fehlt!");
			chai.assert.exists(konto._zinssatz, "Das Attribut this._zinssatz fehlt!");
			chai.assert.exists(konto._dispolimit, "Das Attribut this._dispolimit fehlt!");
			chai.assert.exists(konto._dispozinssatz, "Das Attribut this._dispozinssatz fehlt!");
		});
	});


	describe('testGirokontoGetter', function () {
		let konto = new Girokonto();
		it('Getter der Klasse Girokonto', function () {
			chai.assert.exists(konto.besitzer, "Der Getter für das Attribut Besitzer fehlt oder gibts nichts zurück!");
			chai.assert.exists(konto.kontostand, "Der Getter für das Attribut Kontostand fehlt oder gibts nichts zurück!");
			chai.assert.exists(konto.zinssatz, "Der Getter für das Attribut Zinssatz fehlt oder gibts nichts zurück!");
			chai.assert.exists(konto.dispolimit, "Der Getter für das Attribut Dispolimit fehlt oder gibts nichts zurück!");
			chai.assert.exists(konto.dispozinssatz, "Der Getter für das Attribut Dispozinssatz fehlt oder gibts nichts zurück!");
		});
	});
	describe('testGirokontoSetter', function () {
		let konto = new Girokonto();
		it('set zinssatz', function () {
			konto.zinssatz = 45;
			chai.assert.equal(konto.zinssatz, 45, "set zinssatz speichert den übergebenen Wert nicht ein");
			konto.zinssatz = 468;
			chai.assert.equal(konto.zinssatz, 100, "set zinssatz setzt Werte über 100 nicht auf 100");
			konto.zinssatz = -45;
			chai.assert.equal(konto.zinssatz, 0, "set zinssatz setzt Werte unter 0 nicht auf 0");
		});
		it('set dispozinssatz', function () {
			konto.dispozinssatz = 45;
			chai.assert.equal(konto.dispozinssatz, 45, "set dispozinssatz speichert den übergebenen Wert nicht ein");
			konto.dispozinssatz = 468;
			chai.assert.equal(konto.dispozinssatz, 100, "set dispozinssatz setzt Werte über 100 nicht auf 100");
			konto.dispozinssatz = -1;
			chai.assert.equal(konto.dispozinssatz, 0, "set dispozinssatz setzt Werte unter 0 nicht auf 0");
		});
		it('set dispolimit', function () {
			konto.dispolimit = -468;
			chai.assert.equal(konto.dispolimit, -468, "set dispolimit speichert den übergebenen Wert nicht ein");
		});
	});
});