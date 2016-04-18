<?php

    $icecream = array('good'=>'vanilla','better'=>'caramel','best'=>'chocolate');
    extract($icecream);
    echo $good.' is good, of course. '.$better.' is better, and '.$best.' is best.';

?>
