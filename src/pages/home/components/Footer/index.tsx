import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { PagePath } from '@/src/constants/routing/paths';
import AnalysisIcon from '@/src/public/common/icons/analysis.svg?react';
import HomeIcon from '@/src/public/common/icons/home.svg?react';

import styles from './styles.module.css';

export const Footer = () => {
  return (
    <footer className={styles.component}>
      <ul className={styles.list}>
        <li key={PagePath.Welcome} className={styles.listItem}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? classNames(styles.link, styles.link_active)
                : styles.link
            }
            to={PagePath.Welcome}
          >
            <span className={styles.text}>Добро пожаловать</span>
            <HomeIcon className={styles.icon} />
          </NavLink>
        </li>
        <li key={PagePath.Calculator} className={styles.listItem}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? classNames(styles.link, styles.link_active)
                : styles.link
            }
            to={PagePath.Calculator}
          >
            <span className={styles.text}>Калькулятор</span>
            <AnalysisIcon className={styles.icon} />
          </NavLink>
        </li>
      </ul>
    </footer>
  );
};
