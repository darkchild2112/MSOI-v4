<?php 

	$apiKey = "6624bb0e-bb78-42c3-83f3-1e95aba0cae0";
	$allowedDomain = "http://www.makingsenseofit.org.uk";
	//header('Access-Control-Allow-Origin: *'); // Remove when live
	$statusCode = "";

	if($_POST['apiKey'] == $apiKey /*&& substr($_SERVER['HTTP_REFERER'], 0, strlen($allowedDomain)) == $allowedDomain*/)
	{
		$to = "darkchild2112@googlemail.com";
		//$to = "info@makingsenseofit.org.uk";
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
	header('Content-Type: application/json');
	echo encode_json(array("apiKey" => $_POST['apiKey']));
	//echo "{ \"apiKey\": \"" . $_POST['apiKey'] . "\" }";
	exit;
?>