<?php

    //global and local variables

    //a global variable is a variable that is called outside of your functions.
    $global_value = 4; //this is a global variable
    $value = 8; //this is a global variable

    function scoper()
    {
        //local variables are more efficient because the variable is only used within the function.
        $value = 800; //this is a local variable because it was defined within the function. It can only be used in this function.
        global $global_value; //bringing the global variable into the local function
        echo 'local function value is : '.$value.'<br>';
        echo 'global value brought into the local function is : '.$global_value.'<br>';
    }

    scoper();

    echo 'global value is : '.$value.'<br>';

?>
