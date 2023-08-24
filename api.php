<?php
    header('access-control-allow-origin:http://127.0.0.1:5500');

    header('access-control-allow-headers:x-requested-with');

    $dbString = file_get_contents('./DB.json');

    $db=json_decode($dbString,true);

    header('content-type: application/json');

    echo json_encode($db);

?>