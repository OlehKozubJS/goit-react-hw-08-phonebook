import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
//import css

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
    <form onSubmit={handleSubmit} autoСomplete="off">
      <label>
        <h3>Email</h3>
        <input type="email" name="email" />
      </label>
      <label>
        <h3>Password</h3>
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
