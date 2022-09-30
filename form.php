<?php
$email = $_POST['email'];
$message = $_POST['message'];

$email_from = 'my personal website';

$email_subject = 'Message from personal website';

$email_body = "$email sent". 
                "message: $message";

$to = 'samuelsiuyanyat@gmail.com';

$headers = "From $email_from \r\n";

$headers .= "Reply-To: $email \r\n";

mail($to, $email_subject, $email_body, $headers);

$header("Location: index.html");

?>