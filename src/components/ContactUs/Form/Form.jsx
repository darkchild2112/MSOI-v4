
import Button, { ButtonTypes, ButtonStyles } from './Button';
import TextBox, { TextBoxTypes } from './TextBox';
import MessageBox from './MessageBox';
import Alert, { AlertTypes } from './Alert';
import LoadingIcon from '../../Icons/LoadingIcon';

import './Form.scss'

import { sendMail } from '../../../clients/smtp2go';
import { htmlEmailTemplate } from './htmlEmailTemplate';
import { useState } from 'react';

// https://docs.astro.build/en/recipes/build-forms-api/

const Form = () => {

  const [formData, setFormData] = useState({name: '', email: '', tel: '', message: ''});
  const [isloading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const submitFormEventHandler = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setShowSuccess(false);
    setShowError(false);

    const template = htmlEmailTemplate(formData.name, formData.email, formData.tel, formData.message);
    const response = await sendMail(template);

    setShowSuccess(response.status === 200);
    setShowError(response.status !== 200);
    setIsLoading(false);
  }

  const updateNameEventHandler = (event) => setFormData({...formData, name: event.target.value});
  const updateEmailEventHandler = (event) => setFormData({...formData, email: event.target.value});
  const updateTelEventHandler = (event) => setFormData({...formData, tel: event.target.value});
  const updateMessageEventHandler = (event) => setFormData({...formData, message: event.target.value});
  
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
              updateHandler={updateNameEventHandler}
              disabled={isloading} />
            <TextBox 
              id="email" 
              type={TextBoxTypes.EMAIL} 
              label="Email: (Required)" 
              placeholder="Enter your email address" 
              maxlength="250" 
              required={true}
              updateHandler={updateEmailEventHandler}
              disabled={isloading} />
            <TextBox 
              id="tel" 
              type={TextBoxTypes.TEL} 
              label="Telephone:" 
              placeholder="Enter your telephone number" 
              maxlength="14" 
              required={false}
              updateHandler={updateTelEventHandler}
              disabled={isloading} />
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
              updateHandler={updateMessageEventHandler}
              disabled={isloading} />
          </div>
        </div>
        
        <div className="buttons">
          { 
            !isloading 
            ? <Button>Submit</Button> 
            : <LoadingIcon />
          }
        </div>
      </form>
    </>
  );
};

export default Form;