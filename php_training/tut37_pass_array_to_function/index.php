<?php

    $scores = array(65,32,78,98,66);

    function averager($array)
    {
        $total = 0;
        foreach ($array as $value) {
            $total+=$value;
        }
        $average = $total/count($array);
        return $average;
    }

    echo averager($scores);

?>
