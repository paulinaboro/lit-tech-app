<?php 
require 'config.php'; 

 
    
$courseData1 = "";

$query = "SELECT * FROM courses";
$result = $db->query($query); 

$courseData1 = mysqli_fetch_all($result,MYSQLI_ASSOC);
$courseData1 = json_encode($courseData1);

echo $courseData1;

// echo '{"$courseData1":'.$courseData1.'}';
    //////////////////////////////////

    ?>


