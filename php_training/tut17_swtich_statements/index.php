<?php

    $apples = 1;

    switch ($apples)
    {
        case 1:
            echo 'an apple a day keeps the doctor away';
            break;
        case 5:
            echo 'five apples, that\'s nice';
            break;
        case 10:
            echo '10 apples is a bit much...';
            break;

        default:
            echo "You entered $apples apples";
            break;
    }

?>
