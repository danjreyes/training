<?php
    //use $_GET if using get in the form, $_POST if using post in the form, or $_REQUEST for either get or post.

    $name = $_REQUEST['name'];
    $surname = $_REQUEST['surname'];
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Working with form values</title>
    </head>
    <body>
        <h2>Handling your data</h2>
        <?php echo 'Your name is '.$name.' '.$surname ?>
    </body>
</html>
