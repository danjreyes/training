<?php

    if(!empty($_POST['age']))
    {
        if(is_numeric($_POST['age']))
        {
            echo 'Yes that is numeric';
        }
        else
        {
            echo 'No, that is not numeric, please enter a numeric value';
        }
    }
    else
    {
        echo "please enter a value";
    }

?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Form validation</title>
    </head>
    <body>
        <form action="index.php" method="post">
            age: <input type="test" name="age" value="">
            <input type="submit" value="Send">
        </form>
    </body>
</html>
