import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

function Logo() {
  return (
    <Link to='/react_worldwise'>
      <img src='img/logo.png' alt='WorldWise logo' className={styles.logo} />
    </Link>
  );
}

export default Logo;
