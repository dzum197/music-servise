import React from "react";

import { Link } from "react-router-dom";
import styles from "./nav-menu.module.css";

function NavMenu() {
  const loginClearBtn = () => {
    localStorage.clear();
  }
  return (
    <div className={`${styles.nav__menu} ${styles.menu}`}>
      <ul className={styles.menu__list}>
        <ul className={styles.menu__item}>
          <Link to="/tracks" className={styles.menu__link}>
            Главное
          </Link>
        </ul>
        <ul className={styles.menu__item}>
          <Link to="/tracks" className={styles.menu__link}>
            Мой плейлист
          </Link>
        </ul>
        <ul className={styles.menu__item}>
          <Link to="/" className={styles.menu__link} onClick={loginClearBtn}>
            Войти
          </Link>
        </ul>
      </ul>
    </div>
  );
}

export default NavMenu;