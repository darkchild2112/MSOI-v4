import './Button.scss';

const Button = ({ children, clickHandler }) => {

  return (
    <button 
      type="submit"
      className="btn" 
      onClick={clickHandler}>
      { children }
    </button>
  )
};

export default Button;