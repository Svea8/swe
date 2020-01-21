var autoren = '{"autoren": [{"name": "Dürrenmatt", "vor": "Friedrich", "geb": 1921, "tod": 1990, "buecher": [{"titel": "Die Physiker"}, {"titel": "Der Besuch der alten Dame"}, {"titel": "Der Richter und sein Henker"}]}, {"name": "Frisch", "vor": "Max", "geb": 1911, "tod": 1991, "buecher": [{"titel": "Andorra"}, {"titel": "Stiller"}, {"titel": "Homo Faber"}]}, {"name": "Suter", "vor": "Martin", "geb": 1948, "tod": "-", "buecher": [{"titel": "Die Zeit, die Zeit"}, {"titel": "Die dunkle Seite des Mondes"}, {"titel": "Montechristo"}]}]}';


let txtAutoren=JSON.parse(autoren);
let div=[];
let spalte=document.getElementsByClassName("column"); 

for (let i=0; i<txtAutoren.autoren.length; i++){
	for (let j=0; j<4; j++){
        div[j]=document.createElement("div");
        spalte[j].appendChild(div[j]);
	}	
	
	div[0].innerHTML=txtAutoren.autoren[i].name;
	div[1].innerHTML=txtAutoren.autoren[i].vor;
	div[2].innerHTML=txtAutoren.autoren[i].geb;
    div[3].innerHTML=txtAutoren.autoren[i].tod;
    
    div[1].classList.add("rows");
    let reihe=document.getElementsByClassName("rows");
    
    let p=document.createElement("div");
    p.innerHTML="HI";
    reihe[i].appendChild(p);
}