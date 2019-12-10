function ulAnfuegen(elternknoten){
    //neues ul Element erzeugen
    let ul=document.createElement('ul');
    //Anhängen von ul an Elternknoten
    elternknoten.appendChild(ul);
    //zusätzliches zurückgeben des neuen ul Elements 
    return ul;
}

function liAnfuegen(ul,kapitel){
    //neues li und a Element erzeugen
    let li=document.createElement('li');
    let a=document.createElement('a');
    //id von Kapiten (h2/h3) herausfinden
    let id=kapitel.getAttribute("id");
    //a an li hängen, li an ul hängen, 
    li.appendChild(a);
    ul.appendChild(li);
    //a Inhalt ändern, Verlinkung ändern
    a.setAttribute("href",("#"+id))
    a.innerHTML=kapitel.innerHTML;
    return li;
}

function ladeInhaltsverzeichnis(){
    let nav=document.getElementById("nav");
    let neuUl;
    let alleH2=document.getElementsByTagName("h2");
    let kap=document.getElementsByTagName('div');
   
    for (i=0; i<alleH2.length;i++){
        let h2=kap[i].getElementsByTagName('h2');    
        
        if (h2.length>0){
            neuUl=ulAnfuegen(nav);
            neuUl=liAnfuegen(neuUl,alleH2[i]);
            nav.appendChild(neuUl);
            let alleH3=kap[i].getElementsByTagName('h3');
            let h3=kap[i].getElementsByTagName('h3');
            
            if (h3.length>0){
                
                for (let j=0; j<alleH3.length; j++){
                    let neuesteUl=ulAnfuegen(neuUl);
                    let neuLi=liAnfuegen(neuesteUl,alleH3[j]);
                }
            }
        }
    }
}

function erstelleZurueckLink(){
    let div1=document.createElement('div');
    let a2=document.createElement('a');

    div1.appendChild(a2);

    a2.setAttribute("href",("#nav"));
    a2.innerHTML="Nach oben";
    return div1;
}

function zurueckAnKapitelende(){
    let neuH2=document.getElementsByTagName("h2");
    let elternknoten;
    for (let i=0; i<neuH2.length;i++){
        elternknoten=neuH2[i].parentNode;
        elternknoten.appendChild(erstelleZurueckLink());
    }
}

function zurueckVorNaechstemKapitel(){
    let neuH3=document.getElementsByTagName("h3");
    let elternknoten2;
    for (let i=0; i<neuH3.length;i++){
        elternknoten2=neuH3[i].parentNode;
        elternknoten2.insertBefore(erstelleZurueckLink(),neuH3[i]);
    }
}

ladeInhaltsverzeichnis();
zurueckAnKapitelende();
zurueckVorNaechstemKapitel();