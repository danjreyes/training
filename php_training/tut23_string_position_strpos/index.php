<?php
    $string = 'Hello my name is Daniel, what is your name?';
    $find = 'name';
    $offset = 0;
    $find_length = strlen($find);
    $string_lenth = strlen($string);

// My code
    do{
        $new_pos = strpos($string,$find,$offset);
        if ($new_pos<$offset)
        {
            break;
        }
        echo $new_pos.'<br>';
        $offset = $new_pos+$find_lenth+1;
    } while($offset<$string_lenth);

    echo '<br><br><br><br>';
    $offset=0;

// Teacher's code
    while($string_pos = strpos($string,$find,$offset)){
        echo $find.' was found at line '.$string_pos.'<br>';
        $offset=$string_pos+$find_length;
    }

?>
