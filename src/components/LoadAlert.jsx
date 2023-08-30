import AlertStyles from './PhonebookCSS/Alert.module.css';

export const LoadAlert = ({ children }) => {
  return (
    <div className={AlertStyles.alert}>
      <span className={AlertStyles.alertText}>{children}</span>
    </div>
  );
};
