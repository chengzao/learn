<?php


	header('Content-Type:text/html; charset=utf-8');

	// 模拟从数据库中取数据
	$data = file_get_contents('./data.json');

	$data = json_decode($data);

	// 接收客户端传过来的数据
	$key = $_POST['key'];

	// 根据$key取得数据后，返回给客户端
	echo $data->$key;


?>