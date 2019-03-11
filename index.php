<?php

header('Content-Type: application/json');

$conn = mysqli_connect('localhost', 'root', '', 'registration');

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$query = sprintf("SELECT ratingid, variety, quality FROM chartdata ORDER BY
ratingid");

$result = mysqli_query($conn, $query);

$data = array();
foreach ($result as $row) {
    $data[] = $row;
}

mysqli_close($conn);

print json_encode($data);
