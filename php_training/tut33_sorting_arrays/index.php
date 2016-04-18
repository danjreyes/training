<?php

    $fruit = array('oranges','apples','strawberries');

    //sort asscending
    sort($fruit);
    foreach($fruit as $name)
    {
        echo $name.'<br>';
    }

    echo '<br><br><br><br><br>';

    //sort descending
    rsort($fruit);
    foreach($fruit as $name)
    {
        echo $name.'<br>';
    }

    echo '<br><br><br><br><br>';

    $fruit_list = array('fruit3'=>'oranges','fruit1'=>'apples','fruit2'=>'strawberries');

    //sort an associative array in order by the key
    ksort($fruit_list);
    foreach ($fruit_list as $key => $value) {
        echo $key.' '.$value.'<br>';
    }

?>
