<?php

    //split an array
    $fruit = array('oranges','apples','strawberries','banana','blueberry');

    $new_array = array_slice($fruit,2,3);

    foreach ($new_array as $value)
    {
        echo $value.'<br>';
    }

    echo '<br><br><br><br><br>';

    //merging arrays
    $food = array('burgers','pizza','fries','pies');
    $merged_array = array_merge($fruit,$food);
    foreach ($merged_array as $value)
    {
        echo $value.'<br>';
    }




?>
