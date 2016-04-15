<?php

    $apples = 'I like bananas, bananas, and more bananas!!';
    $location = strpos($apples,banana);
    $new_sent = substr_replace($apples,'apple',$location,strlen(banana));
    echo $new_sent;

    echo '<br><br><br><br>';

    echo str_replace('banana','apple',$apples);


?>
