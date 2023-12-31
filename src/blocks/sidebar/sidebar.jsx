import styles from "./sidebar.module.css";
import color from "../../themes.module.css";

import { useThemeContext } from "../../context/theme";

import SidebarPersonal from "./sidebar-components/sidebar-personal";
import SidebarItem from "./sidebar-item";

function SlideBar() {
  const { theme } = useThemeContext();
    return (
      <div className={`${styles.main__sidebar} ${styles.sidebar} ${theme === 'light' ? color.light__background : color.dark__main_background} `}>
        <SidebarPersonal name="Sergey.Ivanov" />
        <div className={styles.sidebar__avatar} />

        <div className={styles.sidebar__block}>
          <div className={styles.sidebar__list}>
            <SidebarItem />
            <SidebarItem />
            <SidebarItem />
          </div>
        </div>
      </div>
    );
}

export default SlideBar;