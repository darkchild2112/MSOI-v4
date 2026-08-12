import PropTypes from 'prop-types';
import './MessageBox.scss';

const MessageBox = ({
  id,
  label,
  placeholder,
  maxLength,
  required,
  rows,
  cols,
  disabled,
  updateHandler,
  value,
}) => (
  <section className="message-box-container">
    <label htmlFor={id}>{label}</label>
    <textarea
      id={id}
      rows={rows}
      name={id}
      cols={cols}
      placeholder={placeholder}
      maxLength={maxLength}
      aria-required={required}
      required={required}
      onChange={updateHandler}
      disabled={disabled}
      value={value}
    ></textarea>
  </section>
);

MessageBox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  required: PropTypes.bool,
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cols: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  updateHandler: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default MessageBox;
