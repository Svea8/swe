<?php
    $name = $_POST['name'];
    $alter = $_POST['alter'];
    
    if (($name != "") && ($alter > 0)) {
        echo '{"antwort" : "Eingabe korrekt"}';
    } else {
        echo '{"antwort" : "Eingabe fehlerhaft"}';
    }
?>
