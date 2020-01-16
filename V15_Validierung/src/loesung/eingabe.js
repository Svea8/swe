function eingabeValidieren(){
    let test;
    
    if(checkName() && checkAlter() && checkMail()){
        test=true;
    }
    else{
        test=false;
        //alert("falsch");
    }
    console.log(test);
    return test;
}
let span1=document.createElement('span');
function checkName(){
    let check=true;
    let name=document.getElementsByName("name")[0];
    
    if(name.value.length<2 || name.value.length>51){
        check=false;
        //alert("falscher name");
        name.style.backgroundColor="red";
        span1.innerHTML="falscher name";
        name.parentNode.appendChild(span1);
        return check;
    }
    name.style.backgroundColor="white";
    span1.innerHTML="";
    return check;
}

function checkAlter(){
    let check=true;
    let alter=document.getElementsByName("alter")[0];
    //let span=document.createElement('span');
    if(alter.value!=0 && (alter.value<=0 || alter.value>=110)){
        check=false;
        alter.style.backgroundColor="red";
        
        span1.innerHTML="falsches alter";
        alter.parentNode.appendChild(span1);
        return check;
    }
    alter.style.backgroundColor="white";
    span1.innerHTML="";
    return check;
}

function checkMail(){
    let check=true;
    let email=document.getElementsByName("email")[0];
    let a=email.value.indexOf("@");
    let b=email.value.lastIndexOf(".")
    if(email.value.length>4 && a<b-1 && a>-1 && b>-1){
        check=true;
        email.style.backgroundColor="white";
        span1.innerHTML="";
    }
    else{
        check=false;
        email.style.backgroundColor="red";    
        //let span=document.createElement('span');
        span1.innerHTML="falsche mail";
        email.parentNode.appendChild(span1);
    }
    return check;
}
