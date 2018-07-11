<?php
         header("Content-type: text/html; charset=UTF-8");
         // 遍历数据
         include "db_class.php";
         $id = $_COOKIE['id'];
         $sql = "select id, username, password, name from tb_user where id = '$id'";
         $conn = new db();
         $row = $conn->query($sql, 1);
         // 找到数据
         if($row) {
//            返回用户基本信息
//         var_dump($row);
           $array = array("code"=>"200", "msg"=> "", "data"=>  $row);
         } else {
           $array = array("code"=>"1001", "msg"=> "获取数据失败");
         }
         echo json_encode($array);
?>