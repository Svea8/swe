var para=document.createElement("p");
var node=document.createTextNode("Das ist ein neuer Text in einem neuen Paragraphen, " +
		"der vor dem fetten Text eingefügt wurde");
para.appendChild(node);

var element=document.getElementsByTagName("body")[0];
var b=document.getElementById("fett");
element.insertBefore(para, b);