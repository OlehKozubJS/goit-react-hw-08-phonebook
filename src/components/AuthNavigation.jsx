import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from '../components/PhonebookCSS/Navigation.module.css';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const AuthNavigation = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useAuth();

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
      <div>
        {isLoggedIn ? (
          <div className={css.navSection}>
            <p className={css.welcomeText}>Welcome, {user.name}!</p>
            <button
              className={css.styledLink}
              type="button"
              onClick={() => dispatch(logOut())}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className={css.navSection}>
            <NavLink className={css.styledLink} to="/register">
              Register
            </NavLink>
            <NavLink className={css.styledLink} to="/login">
              Log In
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};
