import './Button.scss';

const Button = ({ children, clickHandler }) => {

  return (
    <button 
      type="submit"
      className="formButton" 
      onClick={clickHandler}>
      { children }
    </button>
  )
};

export default Button;