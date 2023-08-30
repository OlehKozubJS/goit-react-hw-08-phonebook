import propTypes from 'prop-types';
import AlertStyles from './PhonebookCSS/Alert.module.css';

export const Alert = ({ clickFunction, name }) => {
  return (
    <div className={AlertStyles.alert}>
      <span className={AlertStyles.alertText}>
        {name} is already in contacts!
      </span>
      <button className={AlertStyles.alertButton} onClick={clickFunction}>
        Close
      </button>
    </div>
  );
};

Alert.propTypes = {
  clickFunction: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
};
