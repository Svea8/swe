h1Dekoration();
kapitelBearbeiten();

function h1Dekoration(){
    let h1 = document.getElementsByTagName('h1');
    h1[0].style.fontSize="50px";
    h1[0].style.textDecoration="underline";
}

function kapitelBearbeiten(){
    let div = document.getElementsByTagName('div');
    let faMa = new FarbManagement(div.length);
    let farbe;
    
    //h2 Überschriften
    for (let i=0; i<div.length;i++){
        h2= div[i].getElementsByTagName('h2');
        for (let j=0; j<h2.length; j++){   
            farbe=faMa.bestimmeFarbe(h2[j],i);
            h2[j].style.background=farbe;
            let kapnummer= i+1;
            h2[j].innerHTML= kapnummer+"."+h2[j].innerHTML+" "+kapnummer;
        } 
    } 

    //h3 Überschriften
    for (let i=0; i<div.length;i++){
        h3= div[i].getElementsByTagName('h3');
        for (let j=0; j<h3.length; j++){   
            farbe=faMa.bestimmeFarbe(h3[j],i);
            h3[j].style.background=farbe; 
            let kapnummer= i+1;
            let ukapnummer=j+1
            h3[j].innerHTML= kapnummer+"."+ukapnummer+"."+h3[j].innerHTML+" "+kapnummer+"."+ukapnummer;
        } 
    }

    //Paragraphen
    for (let i=0; i<div.length;i++){
        par= div[i].getElementsByTagName('p');
        for (let j=0; j<par.length; j++){   
            farbe=faMa.bestimmeFarbe(par[j],i);
            par[j].style.background=farbe; 
        } 
    }
}
