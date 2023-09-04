import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { AuthNav } from './AuthNav';
import { UserMenu } from './UserMenu';
//import css from '../components/PhonebookCSS/Navigation.module.css';
import css from '../components/PhonebookCSS/Pnonebook.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <div>
        <NavLink className={css.styledLink} to="/">
          Home
        </NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </div>
      <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
    </nav>
  );
};
