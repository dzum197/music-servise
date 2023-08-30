import styles from "./buttons.module.scss";

import { useThemeContext } from "../../../context/theme";

import { ReactComponent as Play } from "../../../img/icon/play.svg";
import { ReactComponent as PlayLight } from "../../../img/icon/light/play-light.svg";

function ButtonPlay({ func }) {
  function playBtn() {
    func(true);
  }
  const { theme } = useThemeContext();
  return (
    <div
      onClick={playBtn}
      className={` ${styles["player__btn-play"]} ${styles["_btn"]} `}
    >
      {theme === "light" ? (
        <PlayLight className={styles["player__btn-play-svg"]} />
      ) : (
        <Play className={styles["player__btn-play-svg"]} />
      )}
    </div>
  );
}

export default ButtonPlay;