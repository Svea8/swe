function checkText(absatz) { 
	let text = absatz.innerHTML;
	let index = text.indexOf("absatz");
	if(index > -1) {
		absatz.style.background = "tomato";
	} else {
		absatz.style.background = "lightgreen";
	}
}

function reset(absatz) {
	absatz.style.background = "white";
}

