<?php



?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Retrieving data from forms</title>
    </head>
    <body>
        <form action="handler.php" method="post">
            What are your favorite foods?<br>
            Burger<input type="checkbox" name="food[]" value="Burger"><br>
            Steak<input type="checkbox" name="food[]" value="Steak"><br>
            Salad<input type="checkbox" name="food[]" value="Salad"><br>
            Macaroni<input type="checkbox" name="food[]" value="Macaroni"><br>
            <input type="submit" value="Submit">
        </form>
    </body>
</html>
