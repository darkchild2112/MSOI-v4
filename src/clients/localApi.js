export const sendMail = async (email, name, telephone, message) => {

  const data = new URLSearchParams();
  data.append('apiKey', '6f384e7b-8527-48c7-bf83-62462d02b439');
  data.append('email', email);
  data.append('name', name);
  data.append('telephone', telephone);
  data.append('message', message);

  return fetch('https://www.makingsenseofit.org.uk/api/mail/index.php', {
    method: 'POST',
    body: data
  });
}