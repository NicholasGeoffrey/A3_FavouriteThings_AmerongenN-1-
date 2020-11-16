<?php
//store database request results

$collection = array();

function showAll($conn) {
    $query = "SELECT * FROM favourite_data";

    $runQuery = $conn->query($query);

    while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
        $collection[] = $row;
    }

    //print the collection
    echo (json_encode($collection));
}

function showOne($conn, $id) {
    $query = "SELECT * FROM favourite_data WHERE id=" . $id . "";

    $runQuery = $conn->query($query);

    while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
        $result[] = $row;
    }

    //return $result;
    echo (json_encode($result));
}
