<?php
try{
$dbUserName = 'root';
$dbPassword = '';
$connection = 'mysql:host=localhost; dbname=littech; charset=utf8mb4';
$options = [
PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, //ALLOW US TO USE TRY CATCH
PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ //ALLOW US TO USE JSON
];
$db = new PDO($connection, $dbUserName, $dbPassword, $options);
}catch(PDOException $ex){
echo $ex;
}


