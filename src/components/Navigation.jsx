import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { AuthNav } from './AuthNav';
import { UserMenu } from './userMenu';
//import css from './PhonebookCSS/Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <div>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="tasks">Tasks</NavLink>}
      </div>
      <div></div>
    </nav>
  );
};
