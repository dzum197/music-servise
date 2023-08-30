import styles from "./volume.module.scss";

function VolumeProgress() {
    return(
        <div className={`${styles.volume__progress} ${styles.btn}`}>
            <input type="range" className={styles['volume__progress-line']} name='range' />
        </div>
    );
}

export default VolumeProgress
