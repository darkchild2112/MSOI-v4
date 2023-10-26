
// import { Button, ButtonTypes, ButtonStyles } from './Button';
// import { TextBox, TextBoxTypes } from './TextBox';
// import MessageBox from './MessageBox';
// import { Alert, AlertTypes } from './Alert';

{/* <style lang="scss">

  @import '../../styles/dimensions.scss';

  .alerts {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .hideAlert {
      display: none;
    }
  }

  form {
    .form {
      display: flex;
      flex-direction: row;
      gap: 40px;
      padding: 20px 50px;

      @media screen and (min-width: $breakpoint-md) and (max-width: $breakpoint-lg){
        padding: 20px 0px;
      }

      @media screen and (max-width: $breakpoint-sm){
        flex-direction: column;
        padding: 20px 10px;
        gap: 23px;
      }

      .text-fields{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 23px;

        @media screen and (max-width: $breakpoint-sm){
          width: 100%;
        }
      }

      .message-box {
        width: 50%;

        @media screen and (max-width: $breakpoint-sm){
          width: 100%;
        }
      }
    }

    .buttons {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-direction: row;
      padding-top: 20px;

      @media screen and (max-width: $breakpoint-sm){
        width: 100%;
        flex-direction: column;
        padding: 0 10px;
      }
    }
  }
</style> */}

// https://docs.astro.build/en/recipes/build-forms-api/

const Form = () => (
  <>
    <h2>Test</h2>
    {/* <div class="alerts">
      <Alert id="formErrorAlert" type={AlertTypes.ERROR} text="There are some issues with the data you entered" visible="false" />
      <Alert id="apiErrorAlert" type={AlertTypes.ERROR} text="The enquiry form failed to send, please try again later" visible="false" />
      <Alert id="successAlert" type={AlertTypes.SUCCESS} text="Thank you for your enquiry. We aim to reply within 3 working days. Please check your junk mail if you have not received a reply after this time. Thank you for contacting us." visible="false" />
    </div>
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
    </form> */}
  </>
);

export default Form;