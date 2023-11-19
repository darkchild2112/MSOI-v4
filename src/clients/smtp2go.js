export const sendMail = async (htmlTemplate) => {

  const isDev = import.meta.env.DEV;

  const email = getEmail(isDev);

  const payload = {
    api_key: "api-42FEC8125309494BB3194CA24D35D347",
    to: [`Info <${email}>`],
    sender: `MSOI Enquiry Form <${email}>`,
    subject: "MSOI Enquiry Form",
    html_body: htmlTemplate,
    custom_headers: [
      {
        "header": "Reply-To",
        "value": `Info <${email}>`
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

const getEmail = (isDev) => isDev ? 'info@ben-abbott.co.uk' : 'info@makingsenseofit.org.uk';