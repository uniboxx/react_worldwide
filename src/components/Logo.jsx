import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';
import IMAGES from '../images/Images';

function Logo() {
  return (
    <Link to='/'>
      <img src='/logo.png' alt='WorldWise logo' className={styles.logo} />
    </Link>
  );
}

export default Logo;
