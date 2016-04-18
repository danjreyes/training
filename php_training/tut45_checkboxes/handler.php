<?php

    if(isset($_POST['checkbox1'])) {
        $yes = $_POST['checkbox1'];
    }
    elseif (isset($_POST['checkbox2'])){
        $no = $_POST['checkbox2'];
    }

?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Working with form values</title>
    </head>
    <body>
        <h2>Handling your data</h2>
        Do you play LoL?
        <?php
            if(isset($_POST['checkbox1'])) {
                echo $yes = $_POST['checkbox1'];
            }
            elseif (isset($_POST['checkbox2'])){
                echo $no = $_POST['checkbox2'];
            }
         ?>
    </body>
</html>
