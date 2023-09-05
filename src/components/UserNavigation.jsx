import { useAuth } from 'hooks';
import css from '../components/PhonebookCSS/Navigation.module.css';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserNavigation = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
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
  );
};
