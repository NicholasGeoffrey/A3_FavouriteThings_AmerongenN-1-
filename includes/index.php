<?php 
include("connect.php");
include("functions.php");

//show all content on page
if(isset($_GET["id"])) {
    // get one item from the database - whichever one you clicked on and asked for in the UI
    $targetID = $_GET["id"];
    $result = getSingleUser($pdo, $targetID);

    return $result;
} else {
$Content = showAll($pdo);
return $Content;
}