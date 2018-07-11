<?php
	header("Allow-Control-Allow-Origin:*");
    include "db_class.php";
    header("Content-type: text/html; charset=UTF-8");
    $uName = $_POST['username'];
    $pwd = $_POST['password'];
    $sql = "select * from tb_user where username = '$uName' and password = '$pwd'";
    $conn = new db();
    
    $rows = $conn -> query($sql,2);
    
    if($rows) {
        $arr = array("id" => $rows["id"], "username"=> $rows["username"],
        "password"=>$rows["password"],"phone"=>$rows["phone"],"name"=>$rows["name"]);
        // 返回用户基本信息
//      var_dump($arr);
        $array = array("code"=>"200", "msg"=> "", "data"=>  $arr);
        
      } else {
        $array = array("code"=>"0", "msg"=> "账号或者密码错误！！");
      }
      echo json_encode($array);

?>