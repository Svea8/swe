let canvasElement = document.getElementById("meinCanvas");
let zeichenflaeche = canvasElement.getContext("2d");

function baum(){
    zeichenflaeche.beginPath();
    zeichenflaeche.moveTo(250,25);
    zeichenflaeche.lineTo(300,75);
    zeichenflaeche.lineTo(275,75);
    zeichenflaeche.lineTo(325,125);
    zeichenflaeche.lineTo(275,125);
    zeichenflaeche.lineTo(350,175);
    zeichenflaeche.lineTo(150,175);
    zeichenflaeche.lineTo(225,125);
    zeichenflaeche.lineTo(175,125);
    zeichenflaeche.lineTo(225,75);
    zeichenflaeche.lineTo(200,75);
    zeichenflaeche.lineTo(250,25);
    zeichenflaeche.fillStyle="#04B404";
    zeichenflaeche.fill();
    zeichenflaeche.closePath();

    zeichenflaeche.fillStyle="#8A4B08";
    zeichenflaeche.fillRect(225,175,50,100);
}
let index=0;

function schmuck(){
    let y=[50,100,150,200];
    let x=[50,100,150,200];
    
    zeichenflaeche.beginPath();
    zeichenflaeche.arc(x[index],y[index],20,0,2*Math.PI);
    zeichenflaeche.fillStyle="#2E2EFE"
    zeichenflaeche.fill();
    zeichenflaeche.closePath();
    index++;

}
let an=0;

function licht(){
if (index>3){
zeichenflaeche.beginPath();
zeichenflaeche.arc(50,50,50,0,2*Math.PI);
zeichenflaeche.fillStyle="#FFFF00"
zeichenflaeche.fill();
zeichenflaeche.closePath();
zeichenflaeche.beginPath();
zeichenflaeche.arc(50,50,30,0,2*Math.PI);
zeichenflaeche.fillStyle="#FFBF00"
zeichenflaeche.fill();
zeichenflaeche.closePath();
zeichenflaeche.beginPath();
zeichenflaeche.arc(50,50,20,0,2*Math.PI);
zeichenflaeche.fillStyle="#FE9A2E"
zeichenflaeche.fill();
zeichenflaeche.closePath();

zeichenflaeche.beginPath();
zeichenflaeche.arc(100,100,50,0,2*Math.PI);
zeichenflaeche.fillStyle="#FFFF00"
zeichenflaeche.fill();
zeichenflaeche.closePath();
zeichenflaeche.beginPath();
zeichenflaeche.arc(100,100,30,0,2*Math.PI);
zeichenflaeche.fillStyle="#FFBF00"
zeichenflaeche.fill();
zeichenflaeche.closePath();
zeichenflaeche.beginPath();
zeichenflaeche.arc(100,100,20,0,2*Math.PI);
zeichenflaeche.fillStyle="#FE9A2E"
zeichenflaeche.fill();
zeichenflaeche.closePath();

zeichenflaeche.beginPath();
zeichenflaeche.arc(150,150,50,0,2*Math.PI);
zeichenflaeche.fillStyle="#FFFF00"
zeichenflaeche.fill();
zeichenflaeche.closePath();
zeichenflaeche.beginPath();
zeichenflaeche.arc(150,150,30,0,2*Math.PI);
zeichenflaeche.fillStyle="#FFBF00"
zeichenflaeche.fill();
zeichenflaeche.closePath();
zeichenflaeche.beginPath();
zeichenflaeche.arc(150,150,20,0,2*Math.PI);
zeichenflaeche.fillStyle="#FE9A2E"
zeichenflaeche.fill();
zeichenflaeche.closePath();

zeichenflaeche.beginPath();
zeichenflaeche.arc(200,200,50,0,2*Math.PI);
zeichenflaeche.fillStyle="#FFFF00"
zeichenflaeche.fill();
zeichenflaeche.closePath();
zeichenflaeche.beginPath();
zeichenflaeche.arc(200,200,30,0,2*Math.PI);
zeichenflaeche.fillStyle="#FFBF00"
zeichenflaeche.fill();
zeichenflaeche.closePath();
zeichenflaeche.beginPath();
zeichenflaeche.arc(200,200,20,0,2*Math.PI);
zeichenflaeche.fillStyle="#FE9A2E"
zeichenflaeche.fill();
zeichenflaeche.closePath();
an++;
if(an>1){
    zeichenflaeche.clearRect(0,0,500,600);
    zeichenflaeche.beginPath();
    zeichenflaeche.moveTo(250,25);
    zeichenflaeche.lineTo(300,75);
    zeichenflaeche.lineTo(275,75);
    zeichenflaeche.lineTo(325,125);
    zeichenflaeche.lineTo(275,125);
    zeichenflaeche.lineTo(350,175);
    zeichenflaeche.lineTo(150,175);
    zeichenflaeche.lineTo(225,125);
    zeichenflaeche.lineTo(175,125);
    zeichenflaeche.lineTo(225,75);
    zeichenflaeche.lineTo(200,75);
    zeichenflaeche.lineTo(250,25);
    zeichenflaeche.fillStyle="#04B404";
    zeichenflaeche.fill();
    zeichenflaeche.closePath();

    zeichenflaeche.fillStyle="#8A4B08";
    zeichenflaeche.fillRect(225,175,50,100);
    
}
}
}




/*zeichenflaeche.fillStyle="#FF0000";
zeichenflaeche.fillRect(25,25,100,100);
zeichenflaeche.clearRect(50,50,50,50);
zeichenflaeche.strokeRect(60,60,30,30);
zeichenflaeche.strokeStyle="#04B404";
zeichenflaeche.strokeRect(75,75,100,100);

zeichenflaeche.beginPath();
zeichenflaeche.moveTo(25,150);
zeichenflaeche.lineTo(125,150);
zeichenflaeche.lineTo(125,250);
zeichenflaeche.lineTo(25,250);
zeichenflaeche.lineTo(25,150);
zeichenflaeche.fillStyle="#FF0000";
zeichenflaeche.fill();
zeichenflaeche.closePath();

zeichenflaeche.beginPath();
zeichenflaeche.arc(150,25,50,0,2*Math.PI);
zeichenflaeche.stroke();
zeichenflaeche.closePath();

zeichenflaeche.beginPath();
zeichenflaeche.arc(250,50,50,2*Math.PI,0.5*Math.PI);
zeichenflaeche.stroke();
zeichenflaeche.closePath();*/