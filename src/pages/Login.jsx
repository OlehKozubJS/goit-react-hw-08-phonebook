import { LoginForm } from 'components/LoginForm';
import css from '../components/PhonebookCSS/Pnonebook.module.css';

const Login = () => {
  return (
    <div className={css.phonebook}>
      <h2 className={css.phonebookHeader}>Login</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
