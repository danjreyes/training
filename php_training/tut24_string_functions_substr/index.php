<?php

    $pizza = 'It\'s like you want to be thin and healthy but there is pizza';
    $pizza_len = strlen ($pizza);

    //break the sentence apart, one letter at a time.
    for ($i=0; $i < $pizza_len; $i++) {
        echo 'Letter '.$i.' is '.substr($pizza,$i,1).'<br>';
        }

?>
