<?php
	header("Allow-Control-Allow-Origin:*");
    include "db_class.php";
    header("Content-type: text/html; charset=UTF-8");

    $modNum = $_POST['modNum'];
    $modPrice = $_POST['modPrice'];
    $modName = $_POST['modName'];
    $sql = "select * from tb_goods where name = '$modName' and num > '$modNum'";
    $conn = new db();
    
    $rows = $conn -> query($sql,2);
    
    if($rows) {
    	$arr = array("id" => $rows["id"], "name"=> $rows["name"],
        "price"=>$rows["price"],"num"=>$modNum);
        $array = array("code"=>"200", "msg"=> "", "data"=> $arr);
      } else {
        $array = array("code"=>"0", "msg"=> "账号或者密码错误！！");
      }
      echo json_encode($array);

?>