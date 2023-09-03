import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
//import css

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
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        <h3>Username</h3>
        <input type="text" name="name" />
      </label>
      <label>
        <h3>Email</h3>
        <input type="email" name="email" />
      </label>
      <label>
        <h3>Password</h3>
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
