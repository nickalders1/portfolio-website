<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "nickalders63@gmail.com";
  $subject = "Nieuw bericht via je portfolio";
  $headers = "From: $email\r\nReply-To: $email\r\nContent-type: text/plain; charset=UTF-8\r\n";

  $body = "Naam: $name\nEmail: $email\n\nBericht:\n$message";

  if (mail($to, $subject, $body, $headers)) {
    echo "success";
  } else {
    echo "error";
  }
}
?>
