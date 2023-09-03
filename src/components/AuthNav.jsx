import { NavLink } from 'react-router-dom';
//import css from './PhonebookCSS/Navigation.module.css';

export const AuyhNav = () => {
  return (
    <div>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};
