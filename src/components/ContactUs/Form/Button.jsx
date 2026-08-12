import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ children, clickHandler }) => {
  return (
    <button type="submit" className="formButton" onClick={clickHandler}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  clickHandler: PropTypes.func,
};

export default Button;
