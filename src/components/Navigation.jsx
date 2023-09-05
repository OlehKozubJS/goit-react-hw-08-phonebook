import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { AuthNav } from './AuthNav';
import { UserNav } from './UserMenu.jsx';
import css from '../components/PhonebookCSS/Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.navigation}>
      <div className={css.navSection}>
        <NavLink className={css.styledLink} to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className={css.styledLink} to="/contacts">
            Contacts
          </NavLink>
        )}
      </div>
      <div>{isLoggedIn ? <UserNav /> : <AuthNav />}</div>
    </nav>
  );
};
