import { NavLink } from 'react-router-dom';
import css from '../components/PhonebookCSS/Navigation.module.css';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.styledLink} to="/register">
        Register
      </NavLink>
      <NavLink className={css.styledLink} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
