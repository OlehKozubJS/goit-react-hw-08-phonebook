import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from '../components/PhonebookCSS/Navigation.module.css';
import navCss from '../components/PhonebookCSS/Navigation.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={navCss.navSection}>
      <p className={navCss.welcomeText}>Welcome, {user.name}</p>
      <button
        className={navCss.styledLink}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
