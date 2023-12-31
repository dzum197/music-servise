// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";

import color from "../../themes.module.css";

import { useThemeContext } from "../../context/theme";

import { ReactComponent as Exit } from "../../img/icon/exit.svg";
import { ReactComponent as ExitLight } from "../../img/icon/light/exit-light.svg";

function SlideBarPlaylists() {
  const { theme } = useThemeContext();
  return (
    <div
      className={`${styles.playlists__sidebar} ${styles.sidebar} ${
        theme === "light"
          ? color.light__background
          : color.dark__main_background
      }`}
    >
      <Link to="/">
        {theme === "light" ? (
          <ExitLight className={styles.playlist__sidebar_exit} />
        ) : (
          <Exit className={styles.playlist__sidebar_exit} />
        )}
      </Link>
    </div>
  );
}

export default SlideBarPlaylists;