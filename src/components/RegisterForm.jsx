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
            password: form.elements.password.value,s
        });
    );
    form.reset();
  };
};
