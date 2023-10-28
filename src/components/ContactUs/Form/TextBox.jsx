import './TextBox.scss'

const TextBox = ({ id, label, placeholder, maxLength, required, type }) => (
  <section className="text-box">
    <label for={id}>{label}</label>
    <input 
      id={id} 
      type={type} 
      name={id} 
      placeholder={placeholder} 
      maxlength={maxLength} 
      aria-required={required} 
      required={required} />
  </section>
);

export default TextBox;

export const TextBoxTypes = {
  TEXT: 'text',
  EMAIL: 'email',
  TEL: 'tel',
}

