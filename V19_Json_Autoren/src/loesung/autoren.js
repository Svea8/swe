let autoren = '{"autoren": [{"name": "Dürrenmatt", "vor": "Friedrich", "geb": 1921, "tod": 1990}, ' +
	'{"name": "Frisch", "vor": "Max", "geb": 1911, "tod": 1991},' + 
' {"name": "Suter", "vor": "Martin", "geb": 1948, "tod": "-"}]}';
let txtAutoren=JSON.parse(autoren);

for (let i=0; i<txtAutoren.autoren.length; i++){

	let div=[];
	for (let j=0; j<4; j++){
		div[j]=document.createElement("div");
		let column=document.getElementsByClassName("column");
		column[j].appendChild(div[j]);
	}	
	
	div[0].innerHTML=txtAutoren.autoren[i].name;
	div[1].innerHTML=txtAutoren.autoren[i].vor;
	div[2].innerHTML=txtAutoren.autoren[i].geb;
	div[3].innerHTML=txtAutoren.autoren[i].tod;
}
