<?php

    function adder($arg1,$arg2)
    {
        $sum = $arg1 + $arg2;
        return $sum;
    }

    $apples = adder(12,4);
    $oranges = adder(5,6);

    echo $apples+$oranges;


?>
