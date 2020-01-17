let jsonString = '[{"name": "Ute","matrikelnr": 123, "module": [{"name": "Mathematik","note": 2.0},{"name": "BWL","note": 3.0}]},{"name": "Hans","matrikelnr": 456,"module": [{"name": "Physik","note": 1.0},{"name": "BWL","note": 3.3}]}]';

let txtJsonString= JSON.parse(jsonString);

for (let i=0; i<txtJsonString.length; i++){
    let div = document.createElement("div");
    let body = document.getElementById("body");
    let summe=0;
    let dn;
    let mod=txtJsonString[i].module;

    for (let j=0; j<mod.length; j++){
        summe=summe+mod[j].note;
        dn=summe/mod.length
    }

    div.innerHTML= txtJsonString[i].name+" hat die Durchschnittsnote: "+dn;
    body.appendChild(div);
}