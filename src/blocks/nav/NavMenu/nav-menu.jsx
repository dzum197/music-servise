/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
import { Link } from "react-router-dom";
import { useThemeContext } from "../../../context/theme";

import styles from "./nav-menu.module.css";
import color from "../../../themes.module.css";

import { ReactComponent as Moon } from "../../../img/icon/dark-theme.svg";
import { ReactComponent as Sun } from "../../../img/icon/light-theme.svg";

function NavMenu() {
  const loginClearBtn = () => {
    localStorage.clear();
  };

  const { theme, toggleTheme } = useThemeContext();

  console.log(theme);
  return (
    <div className={`${styles.nav__menu} ${styles.menu}`}>
      <ul className={styles.menu__list}>
        <ul className={styles.menu__item}>
          <Link to="/tracks" className={`${styles.menu__link} ${theme === 'light' ? color.light__text : color.dark__text}`}>
            Главное
          </Link>
        </ul>
        <ul className={styles.menu__item}>
          <Link to="/tracks" className={`${styles.menu__link} ${theme === 'light' ? color.light__text : color.dark__text}`}>
            Мой плейлист
          </Link>
        </ul>
        <ul className={styles.menu__item}>
          <Link to="/" className={`${styles.menu__link} ${theme === 'light' ? color.light__text : color.dark__text}`} onClick={loginClearBtn}>
            Выйти
          </Link>
        </ul>
        <div onClick={toggleTheme}>
          {theme === "dark" ? (
            <Moon />
          ) : (
            <Sun />
          )}
        </div>
      </ul>
    </div>
  );
}

export default NavMenu;