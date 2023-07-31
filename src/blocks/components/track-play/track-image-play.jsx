import styles from "./track-play.module.css";


function TrackImagePlay({img}) {
    return (
        <div className={styles['track-play__image']}>
            <svg className={styles['track-play__svg']} alt="music">
            <use href={img} />
            </svg>
        </div>
    );
}

export default TrackImagePlay