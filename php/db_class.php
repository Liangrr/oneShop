<?php 
//	连接数据库类
	class db {
//		定义公共属性，IP，用户名，密码，数据库名，端口号
    	public $ip = 'localhost';
    	public $username = 'root';
    	public $pwd = '';
    	public $db = 'oneshop';
    	public $port = '3306';
    	
    	public function  query($sql,$type=1){
    		$conn = new mysqli($this -> ip,$this -> username,$this -> pwd,$this -> db,$this -> port);
    		$conn->query("SET CHARACTER SET 'utf8'");//读库   
       	 	$conn->query("SET NAMES 'utf8'");//写库 
       	 	$result = $conn->query($sql);
       	
			if($type==1){
       	 		$row = $result -> fetch_all();
       	 		return $row;
       	 	}else if($type==2){
	            $row = $result -> fetch_assoc();
       	 		return $row;
       	 	}else{
       	 		return $result;
       	 	}
			
       	 	$conn -> close();
    	}
	}
?>