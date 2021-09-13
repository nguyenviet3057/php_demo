<?php

// session_start();
// var_dump($_POST);

$n1 = $_POST['fname1'];
$n2 = $_POST['fname2'];
$bd = $_POST['birthday'];
$ms = $_POST['massage'];

// echo 'Email : '.$email.'<br/>';
// echo 'Password : '.$password.'<br/>';

// $_SESSION['email'] = $email;
// $_SESSION['password'] = $password;

//connect database
$connect = new mysqli("localhost", "root", "", "php_demo");

//cho phep luu dang uicode vao database
// mysqli_set_charset($connect, "utf8");
// if($connect->connect_error)
// {
//     var_dump($connect->connect_error);
//     die();
// }

//insert data into database
$query = "INSERT INTO data(fullname, crush, birthday, massage) VALUE ('$n1','$n2','$bd','$ms')";
mysqli_query($connect, $query);

//endconnect
$connect->close();

header('Location: index.html');