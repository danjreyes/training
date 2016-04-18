<?php


?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>htmlentites / strip_tags</title>
    </head>
    <body>
        <?php
            if(isset($_GET['input']))
            {
                echo strip_tags($_GET['input']);
            }
        ?>
        <form action="index.php" method="get">
                <input type="text" name="input" value="">
                <input type="submit" name="name" value="submit">

        </form>
    </body>
</html>
