import './TextBox.scss'

const TextBox = ({ id, label, placeholder, maxLength, required, type, updateHandler }) => {
  
  return (
    <section className="text-box">
      <label htmlFor={id}>{label}</label>
      <input 
        id={id} 
        type={type} 
        name={id} 
        placeholder={placeholder} 
        maxLength={maxLength} 
        aria-required={required} 
        required={required}
        onChange={updateHandler} />
    </section>
  );
};

export default TextBox;

export const TextBoxTypes = {
  TEXT: 'text',
  EMAIL: 'email',
  TEL: 'tel',
}
