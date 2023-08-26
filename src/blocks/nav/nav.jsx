/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import NavMenu from "./NavMenu/nav-menu";

import { useThemeContext } from "../../context/theme";

import logo from "../../img/logo.png";
import logoLight from "../../img/logo-light.png";

import styles from "./nav.module.css";
import color from "../../themes.module.css";

function Nav() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

  const { theme } = useThemeContext();

  console.log(theme);

  return (
    <nav
      className={`${styles.main__nav} ${styles.nav} ${
        theme === "light"
          ? color.light__nav_background
          : color.dark__nav_background
      }`}
    >
      <div className={`${styles.nav__logo} ${styles.logo}`}>
        <img
          className={styles.logo__image}
          src={theme === "light" ? logoLight : logo}
          alt="logo"
        />
      </div>
      <div
        className={`${styles.nav__burger} ${styles.burger}`}
        onClick={toggleVisibility}
      >
        <span
          className={`${styles.burger__line} ${
            theme === "light"
              ? color.light__border_burger
              : color.dark__border_burger
          } `}
        />
        <span
          className={`${styles.burger__line} ${
            theme === "light"
              ? color.light__border_burger
              : color.dark__border_burger
          } `}
        />
        <span
          className={`${styles.burger__line} ${
            theme === "light"
              ? color.light__border_burger
              : color.dark__border_burger
          } `}
        />
      </div>

      {visible && <NavMenu />}
    </nav>
  );
}

export default Nav;