import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import ContactFormStyles from './PhonebookCSS/ContactForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
        <h3 className={ContactFormStyles.contactFormInputHeader}>Username</h3>
        <input
          lassName={ContactFormStyles.contactFormInput}
          type="text"
          name="name"
        />
      </label>
      <label>
        <h3 className={ContactFormStyles.contactFormInputHeader}>Email</h3>
        <input
          lassName={ContactFormStyles.contactFormInput}
          type="email"
          name="email"
        />
      </label>
      <label>
        <h3 className={ContactFormStyles.contactFormInputHeader}>Password</h3>
        <input
          сlassName={ContactFormStyles.contactFormInput}
          type="password"
          name="password"
        />
      </label>
      <button
        className={ContactFormStyles.contactFormSubmitButton}
        type="submit"
      >
        Register
      </button>
    </form>
  );
};
