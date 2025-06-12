<?php header('Access-Control-Allow-Origin: *');
    $to = "info@arkangate.com";
    $from = $_REQUEST['email'];
    $fullName = $_REQUEST['name'];
    $headers = "From: $from";
    $subject = "You have anew Message from Arkan Gate";

    $fields = array();
    $fields{"name"}    = "Name :";
    $fields{"email"}    = "Email Address :";
    $fields{"phone"}    = "Phone :";
    $fields{"subject"}    = "Subject :";
    $fields{"message"}    = "Message :";
    

    $body = "Here is the message you got:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }

    $send = mail($to, $subject, $body, $headers);

?>