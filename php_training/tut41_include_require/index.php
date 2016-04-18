<?php

// include vs require
// include and require are very similar except that if you use require the page won't work if the page being linked to has an issue. If you use include the everything will still try to display even if there is an issue with the page being linked to
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>This is the title</title>
    </head>
    <body>
        <?php include 'hader.php' ?>
        <p> This is the rest of the page</p>
    </body>
</html>
