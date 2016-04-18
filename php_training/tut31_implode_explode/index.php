<?php

    //implde - turns an array into a string
    $people = array('Quentin','Courtney','Samantha','Sean');

    $implode_string = implode(', ',$people);

    echo $implode_string;

    echo '<br><br><br><br><br><br>';
    //explode - turns a string into an array
    $string = 'The key to immortality, not dying';
    $explode_array = explode(' ',$string);

    foreach ($explode_array as $value)
    {
        echo $value.'<br>';
    }

?>
