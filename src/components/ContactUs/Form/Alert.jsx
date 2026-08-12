import PropTypes from 'prop-types';
import './Alert.scss';

const AlertMe = ({ text, type, visible }) => (
  <div className={`alert alert-${type} ${!visible ? 'hide' : ''}`.trim()} role="alert">
    <p>{text}</p>
  </div>
);

AlertMe.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default AlertMe;

export const AlertTypes = {
  SUCCESS: 'success',
  ERROR: 'error',
};
