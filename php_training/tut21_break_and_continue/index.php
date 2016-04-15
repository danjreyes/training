<?php

    for ($i=0; $i < 1000; $i++) {
        echo "This will run 1000 times.</br>";
        if ($i==10) {
            echo "broken!</br>";
            break;
        }
    }

    echo "<br><br><br><br>";

    for ($i=0; $i <= 10; $i++) {
        if($i%2==0){
            continue;
        }
        echo $i."<br>";

    }

?>
