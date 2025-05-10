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

		$formattedMessage = "You have an enquiry from the Making Sense of It Website" . $newLine . "Name: " . $name . $newLine . "Email: " . $from . $newLine . "Telephone: " . $tel . $newLine . "Message: " . $message;

		$headers .= "From: " . $name . " <" . $from . ">\r\n";
		$headers .= 'Reply-To: '. $from . "\r\n" ;
		$headers .= "Organization: Sender Organization\r\n";
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
		$headers .= "X-Priority: 3\r\n";
		$headers .= "X-Mailer: PHP". phpversion() ."\r\n";

		try {
			$log_entry = $from . "," . $name . "," . $tel . "," . $message . "," . date("Y-m-d H:i:s") . "\n";

    	$writeFileResult = @file_put_contents('message_log.txt', $log_entry, FILE_APPEND);

			if ($writeFileResult === false) {
					throw new Exception('Failed to write to messages.txt');
			}

			$sendMailResult = mail($to,$subject,$formattedMessage,$headers) == "1" ? true : false;

			if ($sendMailResult === false) {
					throw new Exception('Failed to send email');
			}

			$statusCode = "200 Success";

		} catch (Exception $e) {
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