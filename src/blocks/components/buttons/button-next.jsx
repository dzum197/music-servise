import styles from "./buttons.module.scss";
import { useThemeContext } from "../../../context/theme";
import { ReactComponent as NextLight } from "../../../img/icon/light/next-light.svg";
import { ReactComponent as Next } from "../../../img/icon/next.svg";

function ButtonNext() {
  const { theme } = useThemeContext();
  return (
    <div className={styles["player__btn-next"]}>
      {theme === "light" ? (
        <NextLight className={styles["player__btn-next-svg"]} />
      ) : (
        <Next className={styles["player__btn-next-svg"]} />
      )}
    </div>
  );
}

export default ButtonNext;