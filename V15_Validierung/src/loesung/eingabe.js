function eingabeValidieren(){
    let test;
    
    if(checkAlter() && checkMail() && checkName()){
        test=true;
    }
    else{
        test=false;
        alert("falsch");
    }
    console.log(test);
    return test;
}

function checkName(){
    let check=true;
    let name=document.getElementsByName("name")[0].value;
    if(name.length<2 || name.length>51){
        check=false;
        //alert("falscher name");
    }
    return check;
}

function checkAlter(){
    let check=true;
    let alter=document.getElementsByName("alter")[0].value;
    if(alter!=0 && (alter<=0 || alter>=110)){
        check=false;
    }
    return check;
}

function checkMail(){
    let check=true;
    let email=document.getElementsByName("email")[0].value;
    let a=email.indexOf("@");
    let b=email.lastIndexOf(".")
    if(email.length>4 && a<b-1 && a>-1 && b>-1){
        check=true;
    }
    else{
        check=false;
    }
    return check;
}
