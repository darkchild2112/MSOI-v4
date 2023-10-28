import './MessageBox.scss';

 const MessageBox = ({ id, label, placeholder, maxLength, required, rows, cols }) => (
  <section className="message-box-container">
    <label for={id}>{label}</label>
    <textarea 
      id={id} 
      rows={rows} 
      name={id} 
      cols={cols} 
      placeholder={placeholder}
      maxlength={maxLength} 
      aria-required={required}
      required={required}>
    </textarea>
  </section>
);

export default MessageBox