<?php
	header("Allow-Control-Allow-Origin:*");
    include "db_class.php";
    header("Content-type: text/html; charset=UTF-8");
    $uName = $_POST['username'];
    $pwd = $_POST['password'];
    $phone = $_POST['phone'];
    $sql = "INSERT INTO tb_user (username,password,phone) VALUES ('$uName','$pwd','$phone')";
    $conn = new db();
    
    $rows = $conn -> query($sql,null);
    
    if($rows) {
        $array = array("code"=>"200", "msg"=> "", "data"=> $rows);
      } else {
        $array = array("code"=>"0", "msg"=> "账号或者密码错误！！");
      }
      echo json_encode($array);

?>