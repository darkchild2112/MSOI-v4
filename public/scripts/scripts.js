var apiKey = '6624bb0e-bb78-42c3-83f3-1e95aba0cae0';

function SendMail(form)
{	
	$("#" + form["submit"].id).prop('disabled', true);

	HideElement("ContactFormSendSuccessContainer");
	HideElement("ContactFormSendFailureContainer");
	HideElement("ContactFormErrorContainer");

	var validForm = ValidateSendMailForm(form["name"], form["email"], form["message"]);
	
	if(validForm)
	{
		var fName = form["name"].value;
		var fEmail = form["email"].value;
		var fTelephone = form["tel"].value;
		var fMessage = form["message"].value;
		
		var request = $.ajax(
		{
		  url: "http://www.makingsenseofit.org.uk/sScripts/sendMail.php",
		  method: "POST",
		  crossDomain: true,
		  data: { apiKey: apiKey, name : fName, email: fEmail, telephone: fTelephone, message: fMessage }
		});
		 
		request.done(function( data ) 
		{
			ShowElementAndThenFocusOnIt("ContactFormSendSuccessContainer");

			form["name"].value = "";
			form["email"].value = "";
			form["tel"].value = "";
			form["message"].value = "";
		});
		 
		request.fail(function( jqXHR, textStatus, errorThrown ) 
		{
		  //alert( "Request failed: " + textStatus + ' ' + errorThrown);
		  ShowElementAndThenFocusOnIt("ContactFormSendFailureContainer");
		  
		});
	}
	
	$("#" + form["submit"].id).prop('disabled', false);
	
	return false;
}

function ValidateSendMailForm(nameFE, emailFE, messageFE)
{
	var valid = true;
	
	if(nameFE.value == "")
	{
		ApplyErrorStyleToFormElement(nameFE.id);
		ShowElement("nameRequired");
		valid = false;
	}
	else
	{
		RemoveErrorStyleToFormElement(nameFE.id);
		HideElement("nameRequired");
	}
	
	if(emailFE.value == "")
	{
		ApplyErrorStyleToFormElement(emailFE.id);
		ShowElement("emailRequired");
		valid = false;
	}
	else
	{
		// Additional Regex validation on email address
		if(IsValidEmailAddress(emailFE.value) == false)
		{
			ApplyErrorStyleToFormElement(emailFE.id);
			
			HideElement("emailRequired");
			ShowElement("emailInvalid");

			$("#" + emailFE.id).attr("aria-invalid","true");
			
			valid = false;
		}
		else
		{
			RemoveErrorStyleToFormElement(emailFE.id);
			
			HideElement("emailRequired");
			HideElement("emailInvalid");
			
			$("#" + emailFE.id).attr("aria-invalid","false");
		}
	}
	
	if(messageFE.value == "")
	{
		ApplyErrorStyleToFormElement(messageFE.id);
		
		ShowElement("messageRequired");
		
		valid = false;
	}
	else
	{
		RemoveErrorStyleToFormElement(messageFE.id);
		HideElement("messageRequired");
	}
	
	if(!valid)
	{
		// Show Form Error Message
		ShowElementAndThenFocusOnIt("ContactFormErrorContainer");
	}
	else
	{
		// Hide the error message (just in case it errored previously
		HideElement("ContactFormErrorContainer");
	}
	
	return valid;
}

function ApplyErrorStyleToFormElement(elID)
{
	$("#" + elID).addClass("erroredFormEl");
}

function RemoveErrorStyleToFormElement(elID)
{
	$("#" + elID).removeClass("erroredFormEl");
}

function ShowElement(elId)
{
	$("#" + elId).slideDown("slow");
}

function ShowElementAndThenFocusOnIt(elId)
{
	$("#" + elId).slideDown("slow", function()
	{
		$("#" + elId).focus();
	});
}

function HideElement(elId)
{
	$("#" + elId).slideUp("slow");
}

function IsValidEmailAddress(emailAddress) 
{
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};

function ScrollToId(elId)
{
	$('html, body').animate({scrollTop: $(elId).offset().top }, 1000);
}

var activeService;
var serviceFadeSpeed = "slow";

function ChangeService(element)
{
	var serviceId = element.attributes["data-service-id"].value;
	
	if(activeService != null)
	{
		activeService.fadeOut(serviceFadeSpeed, function()
		{
			SetActiveService(serviceId);
		});
	}
	else
	{
		SetActiveService(serviceId);
	}
}

function SetActiveService(serviceId)
{
	$('a[data-service-id]').removeClass("activeServiceLink");
	$('a[data-service-id]').css("background-color", "white");
	
	var selectedEl = $('a[data-service-id="' + serviceId + '"]');
	
	selectedEl.addClass("activeServiceLink");
	selectedEl.css("background-color", selectedEl.data( "selectedColor" ));
	
	activeService = $('div[data-service-id="' + serviceId + '"]');
	
	window.scrollTo(0, 0);
	
	activeService.fadeIn(serviceFadeSpeed);
}

function GetQueryStringValue(key) 
{  
		return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
}	

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-3035262-5', 'auto');
ga('send', 'pageview');

$(function()
{ 
	 var navMain = $(".navbar-collapse"); 
	 navMain.on("click", "a:not([data-toggle])", null, function () {
		 navMain.collapse('hide');
	 });
 });
 
$( "#TelephoneSlideLink" ).click(function() 
{		
	$("#TelephoneSlideNumberContainer").animate({width:95},500, function()
	{
		$("#TelephoneSlideNumber" ).fadeIn();
		$("#TelephoneSlideLink").off("click");
	});
});