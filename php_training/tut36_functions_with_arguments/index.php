<?php

    function say_hello($name)
    {
        echo 'My name is '.$name.'.<br>';
    }

    say_hello('Daniel');
    say_hello('Virginia');
    say_hello('Garrett');
    say_hello('Catherine');
    say_hello(); //function calls with no arguments will produce an error.
    

?>
