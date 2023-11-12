import './Alert.scss';


const AlertMe = ({text, type, visible}) => (
  <div className={`alert alert-${type} ${!visible ? 'hide' : ''}`.trim()} role="alert">
    <p>{text}</p>
  </div>
);

export default AlertMe;

export const AlertTypes = {
  SUCCESS: 'success',
  ERROR: 'error',
}

