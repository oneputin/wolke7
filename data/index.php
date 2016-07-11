<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');

$req = $_REQUEST; // print_r($req); die();
$filename = $req['name'];  
if (!$filename) $filename = "clouds-data.json" ;

$string = file_get_contents($filename);
echo ($string); 
// $array = json_decode($string, true);
// echo json_encode($array);
?>