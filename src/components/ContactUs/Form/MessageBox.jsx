import './MessageBox.scss';

 const MessageBox = ({ id, label, placeholder, maxLength, required, rows, cols, disabled, updateHandler }) => (
  <section className="message-box-container">
    <label htmlFor={id}>{label}</label>
    <textarea 
      id={id} 
      rows={rows} 
      name={id} 
      cols={cols} 
      placeholder={placeholder}
      maxLength={maxLength} 
      aria-required={required}
      required={required}
      onChange={updateHandler}
      disabled={disabled}>
    </textarea>
  </section>
);

export default MessageBox