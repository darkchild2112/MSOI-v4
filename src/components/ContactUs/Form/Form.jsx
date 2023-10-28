
import Button, { ButtonTypes, ButtonStyles } from './Button';
import TextBox, { TextBoxTypes } from './TextBox';
import MessageBox from './MessageBox';
import Alert, { AlertTypes } from './Alert';
import './Form.scss'

// https://docs.astro.build/en/recipes/build-forms-api/

const Form = () => (
  <>
    <h2>Test</h2>
    <Alert type={AlertTypes.ERROR} visible={true} text="There are some issues with the data you entered"  />
    <Alert type={AlertTypes.ERROR} visible={true} text="The enquiry form failed to send, please try again later" />
    <Alert type={AlertTypes.SUCCESS} visible={true} text="Thank you for your enquiry. We aim to reply within 3 working days. Please check your junk mail if you have not received a reply after this time. Thank you for contacting us."/>
    <form>
      <div class="form">
        <div class="text-fields">
          <TextBox id="name" type={TextBoxTypes.TEXT} label="Name: (Required)"  placeholder="Enter your name" maxlength="250" required="true" />
          <TextBox id="email" type={TextBoxTypes.EMAIL} label="Email: (Required)" placeholder="Enter your email address" maxlength="250" required="true" />
          <TextBox id="tel" type={TextBoxTypes.TEL} label="Telephone:" placeholder="Enter your telephone number" maxlength="14" required="false" />
        </div>
        <div class="message-box">
          <MessageBox id="message" rows="5" label="Message: (Required)" cols="30" placeholder="Enter a short message about you enquiry" maxlength="5000" required="true"></MessageBox>
        </div>
      </div>
      <div class="buttons">
        <Button type={ButtonTypes.Button} style={ButtonStyles.SECONDARY}>Clear</Button>
        <Button id="sendFormBtn" type={ButtonTypes.Button} style={ButtonStyles.PRIMARY}>Submit</Button>
      </div>
    </form>
  </>
);

export default Form;