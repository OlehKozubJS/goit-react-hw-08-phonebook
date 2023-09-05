import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from '../components/PhonebookCSS/Navigation.module.css';
import buttonCss from '../components/PhonebookCSS/Navigation.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className="">
      <p>Welcome, {user.name}</p>
      <button
        className={buttonCss.styledLink}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
