<?php

require 'config.php';     
$json = json_decode(file_get_contents('php://input'), true);

// $user_id=$json['user_id'];
// $course_id=$json['course_id'];

//     $courseData = '';
//     if($user_id !=0)
//     {
//         // $query = "INSERT INTO usercourses ($user_id, $course_id)";
//         $query = 'INSERT INTO usercourses(user_id, course_id) VALUES ($user_id, $course_id)';

//         // $db->query("INSERT INTO users(username,password,email,name)
//         // VALUES('$username','$password','$email','$name')");

//         $db->query($query);              
//     }
//     $result = $db->query($query); 

//     $courseData = mysqli_fetch_all($result,MYSQLI_ASSOC);
//     $courseData=json_encode($courseData);
    
//     echo $courseData;

//     checking
    // $check = json_encode($json);
    // echo $check . "kupa";

    
?>