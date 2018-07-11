<?php
    header("Content-type: text/html; charset=UTF-8");
    $id = $_POST('id');
    $conn = new mysqli('localhost','root','','oneshop','3306');
    $sql = "select * from tb_goods";
    
?>