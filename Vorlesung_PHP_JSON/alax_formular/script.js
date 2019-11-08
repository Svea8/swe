function checkEingabe() {
	let ajax = new XMLHttpRequest();
	if(ajax!=null) {
		ajax.open("POST","checkPerson.php");
		ajax.onreadystatechange = function(){
			if(this.readyState == 4){
				if(this.status == 200){
					anzeige(this.responseText);
				}
			}
		}
		var eingaben = new FormData(document.forms.formular);
		ajax.send(eingaben);
	}
}

function anzeige(text) {
	let json = JSON.parse(text);
	alert("Antwort vom Server:" + json.antwort);
}