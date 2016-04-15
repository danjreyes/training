<?php

    $apples = 'I like Bananas, Bananas, and more Bananas!!';
    $apples_lower = strtolower($apples);
    $new_apples = str_replace('banana','apple',$apples_lower);
    echo $new_apples;
    
?>
