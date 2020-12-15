<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if(empty($_POST["name"]) || empty($_POST["email"]) || empty($_POST["phone"]) || empty($_POST["text"])){

  echo json_encode([
    "status" => "danger",
    "msg" => "Please fill all fields!"]);

} else {

  // config
  $adminEmail =  "ido@whiteweb.co.il";
  $msg = filter_var($_POST['text'], FILTER_SANITIZE_STRING);
  $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
  $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
  $phone = filter_var($_POST['phone'], FILTER_SANITIZE_NUMBER_INT);

  // prepare mail
  $msg = wordwrap($msg,70);
  $headers = 'From: '. $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n";

  // send email
  /*
    next line won't work since I need access to server in order to enable mailing 
    I have disabled it so no error will be thrown.
  */
  # mail($adminEmail,"הודעה מ$name",$msg, $headers); 

  echo json_encode([
    "status" => "success",
    "msg" => "תודה על פנייתך"]);
}



