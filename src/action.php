<?php
 $a = $_POST['firstName'];
 $b = $_POST['lastName']; 
 $res = $a ." ". $b;

 $file = file_get_contents('users.json');
$list = json_decode($file,TRUE); 
unset($file);
$list[] = [ $res ];
file_put_contents('users.json',json_encode($list));
?>

