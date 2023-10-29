import './Button.scss';

const Button = ({ id, type, style, fill, children, clickHandler }) => {

  const btnType = type || ButtonTypes.BUTTON;
  const btnStyle = style || ButtonStyles.PRIMARY;

  return (
    <button 
      id={id} 
      type={btnType} 
      className={`btn ${btnStyle} ${fill ? 'full-width' : ''}`.trim()} 
      onClick={clickHandler}>
      { children }
    </button>
  )
};

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

