{/* <style lang="scss">
  label {
    font-weight: 700;
  }
  
  textarea {
    width: 100%;
    height: 216px;
  }
</style> */}

 const MessageBox = ({ id, label, placeholder, maxLength, required, type, rows, cols }) => (
  <>
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
  </>
);

export default MessageBox