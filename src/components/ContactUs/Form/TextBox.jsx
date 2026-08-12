import PropTypes from 'prop-types';
import './TextBox.scss';

const TextBox = ({
  id,
  label,
  placeholder,
  maxLength,
  required,
  type,
  disabled,
  updateHandler,
  value,
}) => {
  return (
    <section className="text-box">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={id}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        aria-required={required}
        required={required}
        onChange={updateHandler}
        disabled={disabled}
      />
    </section>
  );
};

TextBox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  required: PropTypes.bool,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  updateHandler: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default TextBox;

export const TextBoxTypes = {
  TEXT: 'text',
  EMAIL: 'email',
  TEL: 'tel',
};
