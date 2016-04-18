<?php
    //use $_GET if using get in the form, $_POST if using post in the form, or $_REQUEST for either get or post.

    $username = $_POST['username'];
    $password = $_POST['password'];
    $data = $_POST['data'];

?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Working with form values</title>
    </head>
    <body>
        <h2>Handling your data</h2>
        <?php
            echo 'Welcome'.' '.$username.'. '.'Your password is '.'<strong>'.$password.'</strong>'.'<br>'.'Your data is:<br/>'.$data;
         ?>
    </body>
</html>
