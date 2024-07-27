import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.scss';
import Logo from './Logo';

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to='/react_worldwise/pricing'>Pricing</NavLink>
        </li>
        <li>
          <NavLink to='/react_worldwise/product'>Product</NavLink>
        </li>
        <li>
          <NavLink to='/react_worldwise/login' className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
