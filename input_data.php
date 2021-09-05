<?php

// session_start();
// var_dump($_POST);

$email = $_POST['email'];
$password = $_POST['password'];

// echo 'Email : '.$email.'<br/>';
// echo 'Password : '.$password.'<br/>';

// $_SESSION['email'] = $email;
// $_SESSION['password'] = $password;

//connect database
$connect = new mysqli("localhost", "root", "", "php_demo");

//cho phep luu dang uicode vao database
mysqli_set_charset($connect, "utf8");
if($connect->connect_error)
{
    var_dump($connect->connect_error);
    die();
}

//insert data into database
$query = "INSERT INTO backend_demo(email, password) VALUE ('$email', '$password')";
mysqli_query($connect, $query);

//endconnect
$connect->close();