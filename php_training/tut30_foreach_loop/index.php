<?php

    //normal array
    $normal_array = array("Sandra",'Courtney','Samantha');
    $assoc_array = array('Ryan'=>150.00,'Daniel'=>21.95,'Virginia'=>0.99);
    foreach ($normal_array as $value) {
        echo $value."<br>";
    }

    echo "<br><br><br><br>";

    //associative array
    foreach($assoc_array as $key => $value){
        echo $key.' owes you '.$value.'<br>';
    }

?>
