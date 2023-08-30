import styles from "./track.module.css";
import color from "../../../themes.module.css";

import { useThemeContext } from "../../../context/theme";

function TrackImage() {
    const { theme } = useThemeContext();
    return(
        <div className={`${styles['track__title-image']} ${theme === 'light' ? styles['track__title-image_light'] : styles['track__title-image_dark']}`}>
            <svg className={styles['track__title-svg']} alt="music">
                <use href="img/icon/sprite.svg#icon-note" />
            </svg>
        </div>
    );
}

export default TrackImage