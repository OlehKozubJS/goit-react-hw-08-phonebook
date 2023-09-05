import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from '../components/PhonebookCSS/Navigation.module.css';
import { UserNavigation } from './UserNavigation';
import { AuthNavigation } from './AuthNavigation';

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
      <div>{isLoggedIn ? <UserNavigation /> : <AuthNavigation />}</div>
    </nav>
  );
};
