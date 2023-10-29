
import Button, { ButtonTypes, ButtonStyles } from './Button';
import TextBox, { TextBoxTypes } from './TextBox';
import MessageBox from './MessageBox';
import Alert, { AlertTypes } from './Alert';

import './Form.scss'

import { sendMail } from '../../../clients/smtp2go';

import { useState } from 'react';

// https://docs.astro.build/en/recipes/build-forms-api/

const Form = () => {

  // TODO: Consolidate state into a single object
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const submitFormEventHandler = async (event) => {
    event.preventDefault();

    setLoading(true);
    setShowSuccess(false);
    setShowError(false);

    const response = await sendMail({name, email, tel, message});

    if(response.status === 200) {
      setShowSuccess(true);
    }
    else{
      setShowError(true);
    }

    setLoading(false);
  }

  const updateNameEventHandler = (event) => setName(event.target.value);
  const updateEmailEventHandler = (event) => setEmail(event.target.value);
  const updateTelEventHandler = (event) => setTel(event.target.value);
  const updateMessageEventHandler = (event) => setMessage(event.target.value);
  
  return (
    <>
      <Alert type={AlertTypes.ERROR} visible={showError} text="The enquiry form failed to send, please try again later" />
      <Alert type={AlertTypes.SUCCESS} visible={showSuccess} text="Thank you for your enquiry. We aim to reply within 3 working days. Please check your junk mail if you have not received a reply after this time. Thank you for contacting us."/>
      <form onSubmit={submitFormEventHandler}>
        <div className="form">
          <div className="text-fields">
            <TextBox 
              id="name" 
              type={TextBoxTypes.TEXT} 
              label="Name: (Required)" 
              placeholder="Enter your name" 
              maxlength="250" 
              required={true}
              updateHandler={updateNameEventHandler} />
            <TextBox 
              id="email" 
              type={TextBoxTypes.EMAIL} 
              label="Email: (Required)" 
              placeholder="Enter your email address" 
              maxlength="250" 
              required={true}
              updateHandler={updateEmailEventHandler} />
            <TextBox 
              id="tel" 
              type={TextBoxTypes.TEL} 
              label="Telephone:" 
              placeholder="Enter your telephone number" 
              maxlength="14" 
              required={false}
              updateHandler={updateTelEventHandler} />
          </div>
          <div className="message-box">
            <MessageBox 
              id="message" 
              rows="5" 
              label="Message: (Required)" 
              cols="30" 
              placeholder="Enter a short message about you enquiry" 
              maxlength="5000" 
              required={true}
              updateHandler={updateMessageEventHandler} />
          </div>
        </div>
        
        <div className="buttons">
          { 
            !loading 
            ? <Button type={ButtonTypes.SUBMIT} style={ButtonStyles.PRIMARY}>Submit</Button> 
            : <div>Loading...</div>
          }
        </div>
      </form>
    </>
  );
};

export default Form;