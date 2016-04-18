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
        These are your favorite foods.<br/>
        <?php
            $foods = $_POST['food'];
            foreach ($foods as $key => $value) {
                echo $value.'<br/>';
            }
         ?>
    </body>
</html>
