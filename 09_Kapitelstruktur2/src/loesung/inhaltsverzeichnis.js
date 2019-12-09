



/*let lis=[];
for (let i=0; i<4; i++){
    let unterUl=document.createElement('ul');
    let unterLis=[];
    let oberLink=document.createElement('a');

    lis[i]=document.createElement('li');
    
    ul.appendChild(lis[i]);
    lis[i].appendChild(unterUl);
    lis[i].appendChild(oberLink);
    
    

    
    if (lis[0]){
        länge =3;
    }
    else{
        länge=2;
    }
    for (let j=0;j<länge;j++){
        let unterLink=document.createElement('a');
        unterLis[j]=document.createElement('li');
        unterUl.appendChild(unterLis[j]);
        unterLis[j].appendChild(unterLink);
    }
}

nav.appendChild(ul);*/

function ulAnfuegen(elternknoten){
    let ul=document.createElement('ul');
    elternknoten.appendChild(ul);
    return ul;
}

function liAnfuegen(ul,kapitel){
    let li=document.createElement('li');
    let a=document.createElement('a');
    let h2=kapitel.getElementsByTagName('h2')[0];
    let id=h2.getAttribute("id");
    ul.appendChild(li);
    li.appendChild(a);
    a.setAttribute("href",("#"+id))
    a.innerHTML=h2.innerHTML;
    return li;
}

function ladeInhaltsverzeichnis(){
    let nav=document.getElementById("nav");
    let neuUl;
    //let alleH2=document.getElementsByTagName("h2");
    let kapitel=document.getElementsByTagName('div');
    

    for (i=0; i<kapitel.length;i++){
        neuUl=ulAnfuegen(nav);
        neuUl=liAnfuegen(neuUl,kapitel[i]);
        nav.appendChild(neuUl);
        let alleH3=kapitel[i].getElementsByTagName('h3');
    

    
    for (let j=0; j<alleH3.length; j++){
        ulAnfuegen(neuUl);
        let neuLi=liAnfuegen(alleH3[j],kapitel[i]);
        neuUl.appendChild(neuLi);
        }}
    
}

ladeInhaltsverzeichnis();