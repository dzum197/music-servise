/* eslint-disable import/first */
import { useState } from 'react';
import NavMenu from "./nav-menu";
import styles from "./nav.module.css";

function Nav() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

  return (
    <nav className={`${styles.main__nav} ${styles.nav}`}>
      <div className={`${styles.nav__logo} ${styles.logo}`}>
        <img className={styles.logo__image} src="img/logo.png" alt="logo" />
      </div>
      <div
        className={`${styles.nav__burger} ${styles.burger}`}
        onClick={toggleVisibility} aria-hidden="true"
      >
        <span className={styles.burger__line} />
        <span className={styles.burger__line} />
        <span className={styles.burger__line} />
      </div>

      {visible && <NavMenu />}
    </nav>
  );
}

export default Nav;