

// import './ButtonStyles.scss';
// import { ButtonTypes, ButtonStyles } fro../../Button/ButtonTypespes'

// const { id, type, style, fill } = Astro.props;

// const btnType = type || ButtonTypes.BUTTON;
// const btnStyle = style || ButtonStyles.PRIMARY;



const Button = ({ id, type, style, fill }) => (
  <button id={id} type={btnType} class={`btn ${btnStyle} ${fill ? 'full-width' : ''}`.trim()}>
    <children />
  </button>
);

export default Button

export const ButtonTypes = {
  BUTTON: 'button',
  SUBMIT: 'submit',
  RESET: 'reset',
  LINK: 'link'
}

export const ButtonStyles = {
  PRIMARY: 'btn-primary',
  SECONDARY: 'btn-secondary',
}

