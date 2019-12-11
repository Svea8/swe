function aufbau(){
    let name=[];
    let lehGeb=[];
    
    for (let i=0; i<2;i++){
    let body=document.getElementsByTagName("body");
    let schildDiv=document.createElement('div');
    let halloH2=document.createElement('h2');
    let namLehGeb=document.createElement('div');
    name[i]=document.createElement('p');
    lehGeb[i]=document.createElement('p');

    body[0].appendChild(schildDiv);
    schildDiv.appendChild(halloH2);
    schildDiv.appendChild(namLehGeb);
    namLehGeb.appendChild(name[i]);
    namLehGeb.appendChild(lehGeb[i]);

    schildDiv.classList.add("schildDiv");
    namLehGeb.classList.add("namLahGeb")

    halloH2.innerHTML="Hallo, ich heiße...";
    }
    name[0].innerHTML="Dörsam";
    lehGeb[0].innerHTML="SE";
    name[1].innerHTML="Hitzges";
    lehGeb[1].innerHTML="Datenbanken";
}
aufbau();