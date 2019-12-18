let radio= new Radio();

 

function display(){

    let id=document.getElementById("display");

    id.innerHTML=radio.toString();

}

function an(){

    radio.an();

    display();

}

function aus(){

    radio.aus();

    display();

}

function lauter(){

    radio.lauter();

    display();

}

function leiser(){

    radio.leiser();

    display();

}

function frequenz(){

    radio.frequenz=document.getElementById("frequenz").value;

}