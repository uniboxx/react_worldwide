import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.scss';
import Logo from './Logo';
import { useAuth } from '../contexts/FakeAuthContext';

function PageNav() {
  const { isAuthenticated, logout } = useAuth();
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to='/pricing'>Pricing</NavLink>
        </li>
        <li>
          <NavLink to='/product'>Product</NavLink>
        </li>
        <li>
          {!isAuthenticated ? (
            <NavLink to='/login' className={styles.ctaLink}>
              Login
            </NavLink>
          ) : (
            <NavLink
              to='/react_worldwise'
              className={styles.ctaLink}
              onClick={logout}>
              Logout
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
