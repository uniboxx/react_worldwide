import { useEffect } from 'react';
import Map from '../components/Map';
import Sidebar from '../components/Sidebar';
import User from '../components/User';
import styles from './AppLayout.module.scss';

function AppLayout() {
  useEffect(function () {
    if (localStorage.getItem('cities')) console.log('no localstorage');
    else 'localstorage';
  }, []);

  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
