import Map from '../components/Map';
import Sidebar from '../components/Sidebar';
import User from '../components/User';
import styles from './AppLayout.module.scss';
import { useAuth } from '../contexts/FakeAuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function AppLayout() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) {
        navigate('/react_worldwise/');
      }
    },
    [isAuthenticated, navigate]
  );

  return (
    isAuthenticated && (
      <div className={styles.app}>
        <Sidebar />
        <Map />
        <User />
      </div>
    )
  );
}

export default AppLayout;
