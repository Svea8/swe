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

function checkName(){
    let check=true;
    let name=document.getElementsByName("name")[0];
    if(name.value.length<2 || name.value.length>51){
        check=false;
        //alert("falscher name");
        name.style.backgroundColor="red";
        let span=document.createElement('span');
        span.innerHTML="falscher name";
        name.appendChild(span);
        return check;
    }
    name.style.backgroundColor="white";
    return check;
}

function checkAlter(){
    let check=true;
    let alter=document.getElementsByName("alter")[0];
    if(alter.value!=0 && (alter.value<=0 || alter.value>=110)){
        check=false;
        alter.style.backgroundColor="red";
        return check;
    }
    alter.style.backgroundColor="white";
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
    }
    else{
        check=false;
        email.style.backgroundColor="red";    
    }
    return check;
}
