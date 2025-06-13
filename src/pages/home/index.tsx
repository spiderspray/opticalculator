import { Fragment } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { PagePath } from '@/src/constants/routing/paths';

import { Footer } from './components/Footer';

import styles from './styles.module.css';

export const HomePage = () => {
  const location = useLocation();

  const shouldRedirect = location.pathname === PagePath.Home;

  return (
    <Fragment>
      {shouldRedirect && <Navigate to={PagePath.Welcome} />}

      <div className={styles.component}>
        <main className={styles.container}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </Fragment>
  );
};
