import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';
import IMAGES from '../images/Images';

function Logo() {
  return (
    <Link to='/react_worldwise'>
      <img src={IMAGES.logo} alt='WorldWise logo' className={styles.logo} />
    </Link>
  );
}

export default Logo;
