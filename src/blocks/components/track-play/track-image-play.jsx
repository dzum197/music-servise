import styles from "./track-play.module.css";

function TrackImagePlay() {
    return (
        <div className={styles['track-play__image']}>
            <svg className={styles['track-play__svg']} alt="music">
                <use href="img/icon/sprite.svg#icon-note" />
            </svg>
        </div>
    );
}

export default TrackImagePlay