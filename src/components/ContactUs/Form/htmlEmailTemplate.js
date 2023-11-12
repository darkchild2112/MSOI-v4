export const htmlEmailTemplate = (name, email, tel, message) => (
  `
    <h1>Making Sense Of It Enquiry Form</h1>
    <p>Someone has submitted an enquiry form on the Making Sense Of It website.</p>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Telephone: ${tel}</p>
    <p>Message: ${message}</p>
  `
);