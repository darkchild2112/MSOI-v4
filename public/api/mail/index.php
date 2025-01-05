<?php 
	$apiKey = "6f384e7b-8527-48c7-bf83-62462d02b439";
	$allowedDomain = "https://www.makingsenseofit.org.uk";
	header('Access-Control-Allow-Origin: *'); // Remove when live
	$statusCode = "";

	$apiKeyRequestParam = $_POST['apiKey'];

	if($apiKeyRequestParam == $apiKey && substr($_SERVER['HTTP_REFERER'], 0, strlen($allowedDomain)) == $allowedDomain)
	{
		//$to = "darkchild2112@googlemail.com";
		$to = "info@makingsenseofit.org.uk";
		$from = $_POST['email'];
		$name = $_POST['name'];
		$tel = $_POST['telephone'];
		$message = $_POST['message'];
		$subject = "Making Sense of It Website Enquiry";
		
		$newLine = "\n\n";

		$message = "You have an enquiry from the Making Sense of It Website" . $newLine . "Name: " . $name . $newLine . "Email: " . $from . $newLine . "Telephone: " . $tel . $newLine . "Message: " . $message;

		$headers = "From: " . $name . " <" . $from . ">";
		
		$success = mail($to,$subject,$message,$headers) == "1" ? true : false;
		
		if($success)
		{
			$statusCode = "200 Success";
		}
		else
		{
			$statusCode = "500 Server Error";
		}
	}
	else
	{
		$statusCode = "400 Bad Request";
	}

	header("HTTP/1.1 " . $statusCode);
	// header('Content-Type: application/json');
	// echo "{ \"apiKey\": \"" . $apiKeyRequestParam . "\", \"email\": \"" . $_POST['email'] . "\" }";
	exit;
?>