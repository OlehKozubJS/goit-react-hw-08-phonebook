import { RegisterForm } from 'components/RegisterForm';
import css from '../components/PhonebookCSS/Pnonebook.module.css';

const Register = () => {
  return (
    <div>
      <h2 className={css.phonebookHeader}>Registration</h2>
      <RegisterForm />
    </div>
  );
};

export default Register;
