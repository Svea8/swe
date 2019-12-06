function zeilenZaehlen(){
    let row=document.getElementsByClassName("row");
    let buttons=document.getElementById("buttons");
    let body=document.getElementsByTagName('body');

    let zahl=row.length;

    let h2= document.createElement('h2');
    
    h2.innerHTML=zahl;
    body[0].insertBefore(h2,buttons);
}

function zellenLoeschen(){
    let row=document.getElementsByClassName("row");
    let loeZelle;

    for (let i=0; i<row.length; i++){
        let column=row[i].getElementsByClassName("column");
        loeZelle=column[1];
        if(column.length>1){
            row[i].removeChild(loeZelle); 
        }
    }
}

function zebraMuster(){
    let arr=["green","blue","red","cyan"]

    let row=document.getElementsByClassName("row");
    let l=Math.round((Math.random(0))*3);
    row[0].style.background=arr[l];
    row[2].style.background=arr[l];
    row[4].style.background=arr[l];
}