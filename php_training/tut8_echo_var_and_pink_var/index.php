<?php

    //echoing variables
    //string interpolation
    /*

    */

    $name = "Daniel";
    $age = 32;

    echo ("Hello ".$name. ". You are ".$age." years old.");

    /*string interpolation

    With double quotes you don't have to concatenate the variables. You can use variables inside of a string.

    Don't use the double quotes ("") if you don't need to have variables in the string. It is slower. Using single quotes is faster.
    */

    echo ("<br>Hello $name. You are $age years old.");

?>
