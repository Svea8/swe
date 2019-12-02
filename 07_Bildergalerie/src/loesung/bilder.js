let archiv= new Archiv;


function bildWechseln(){
    
    let img= document.getElementsByTagName('img');

    let naeBil=archiv.naechstesBild();
    let neuerDateiname="img/"+naeBil.src;

    img[0].src=neuerDateiname;
    img[0].setAttribute("title",naeBil.title)
    img[0].setAttribute("alt",naeBil.alt);

}

