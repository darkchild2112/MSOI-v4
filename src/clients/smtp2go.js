export const sendMail = async (formData) => {
  const payload = {
    api_key: "api-42FEC8125309494BB3194CA24D35D347",
    to: ["Info <info@ben-abbott.co.uk>"],
    sender: `Enquiry Form <info@ben-abbott.co.uk>`,
    subject: "Enquirey Form",
    text_body: "Making Sense Of It Test Email",
    html_body: "<h1>Making Sense Of It Test Email</h1>",
    custom_headers: [
      {
        "header": "Reply-To",
        "value": "Info <info@makingsenseofit.org.uk>"
      }
    ],
  };

  return fetch('https://api.smtp2go.com/v3/email/send', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  });
}