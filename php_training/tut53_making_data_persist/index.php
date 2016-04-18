<?php


?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Form validation</title>
    </head>
    <body>
        <form action="index.php" method="post">
        <?php
        if (isset($_POST[first_name]))
        {
            $first_name = $_POST['first_name'];
        }
        else
        {
            $first_name = '';
        }

        if (isset($_POST[last_name]))
        {
            $last_name = $_POST['last_name'];
        }
        else
        {
            $last_name = '';
        }

        echo "
            first name:<input type='text' name='first_name' value=$first_name><br><br>
            last name: <input type='text' name='last_name' value=$last_name><br>
            <input type='submit' value='Send'>
        ";
        ?>
        </form>
    </body>
</html>
