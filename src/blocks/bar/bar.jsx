import styles from "./bar.module.css";
import color from "../../themes.module.css";

import { useThemeContext } from "../../context/theme";

import PlayerBlock from "./player-block";

function Bar() {
  const { theme } = useThemeContext();
  return (
    <div className={`${styles.bar} ${theme === 'light' ? color.light__background : color.dark__main_background} `}>
      <div className={styles.bar__content}>
        <PlayerBlock />
      </div>
    </div>
  );
}

export default Bar;