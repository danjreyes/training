<?php


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

            echo 'You selected: <br>';
            foreach ($_POST['food'] as $key => $value)
            {
                echo $value.'<br>';
            }

         ?>
    </body>
</html>
