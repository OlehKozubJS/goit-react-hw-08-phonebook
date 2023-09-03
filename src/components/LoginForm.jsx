import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import ContactFormStyles from './PhonebookCSS/ContactForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form
      className={ContactFormStyles.contactForm}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <label>
        <h3 className={ContactFormStyles.contactFormInputHeader}>Email</h3>
        <input
          className={ContactFormStyles.contactFormInput}
          type="email"
          name="email"
        />
      </label>
      <label>
        <h3 className={ContactFormStyles.contactFormInputHeader}>Password</h3>
        <input
          className={ContactFormStyles.contactFormInput}
          type="password"
          name="password"
        />
      </label>
      <button
        className={ContactFormStyles.contactFormSubmitButton}
        type="submit"
      >
        Log In
      </button>
    </form>
  );
};
