import React from 'react';

export const TextBoxTypes = {
  TEXT: 'text',
  EMAIL: 'email',
  TEL: 'tel',
}

//const { id, label, placeholder, maxLength, required, type } = Astro.props;

{/* <style lang="scss">

  label {
    font-weight: 700;
  }
  
  input {
    width: 100%;
  }

</style> */}

const TextBox = ({ id, label, placeholder, maxLength, required, type }) => (
  <section>
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

