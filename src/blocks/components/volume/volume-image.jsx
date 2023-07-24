<<<<<<< Updated upstream
import styles from "./volume.module.scss";

function VolumeImage() {
    return(
        <div className={styles.volume__image}>
            <svg className={styles.volume__svg} alt="volume">
=======
function VolumeImage() {
    return(
        <div className="volume__image">
            <svg className="volume__svg" alt="volume">
>>>>>>> Stashed changes
                <use href="img/icon/sprite.svg#icon-volume" />
            </svg>
        </div>
    );
}

export default VolumeImage