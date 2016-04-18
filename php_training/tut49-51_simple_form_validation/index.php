<?php
    if(!empty($_POST['username']) && !empty($_POST['password']) && !empty($_POST['password_again']) && !empty($_POST['gender']) && !empty($_POST['info']))
    {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $password_again = $_POST['password_again'];
        $gender = $_POST['gender'];
        $info = $_POST['info'];

        if (strlen($username)>32)
        {
            echo "your username is too long";
        }
        elseif ($password != $password_again)
        {
            echo "your passwords do not match";
        }
        elseif (strlen($password)>32)
        {
            echo "your password is too long";
        }
        elseif (strlen($info)>120)
        {
            echo "your info is too long";
        }
        else
        {
            echo "The following data has been submitted<br>
            username : $username <br>
            password : $password <br>
            gender : $gender <br>
            info : $info <br>
            ";
        }
    }
    else
    {
        echo 'You need to fill in all fields';
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
            <h2>Register</h2>
            username:<input type="text" name="username" value=""><br><br>
            password:<input type="password" name="password" value=""><br><br>
            password:<input type="password" name="password_again" value=""><br><br>
            Gender:<br>
            male <input type="radio" name="gender" value="male"><br>
            female <input type="radio" name="gender" value="female"><br><br>
            tell us about yourself<br>
             <textarea name="info" rows="20" cols="20"></textarea><br>
            <input type="submit" value="Send">
        </form>
    </body>
</html>
