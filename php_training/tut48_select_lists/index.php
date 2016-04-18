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
            What is your favorite food?
            <select multiple class="" name="food[]">
                <option value="steak">Steak</option>
                <option value="salad">Salad</option>
                <option value="burger">Burger</option>
                <option value="macoroni">Macoroni</option>
            </select>
            <input type="submit" value="Send">
        </form>
    </body>
</html>
