import styles from "./volume.module.scss";

<<<<<<< Updated upstream
function VolumeProgress() {
    return(
        <div className={`${styles.volume__progress} ${styles._btn}`}>
            <input type="range" className={styles['volume__progress-line']} name='range' />
=======
function VolumeProgress({ audio }) {
    function volumeChange(event) {
        audio.current.volume = event.target.value / 100;  
    }

    return(
        <div className="volume__progress _btn">
            <input onInput={volumeChange} type="range" className={styles['volume__progress-line']} name='range' />
>>>>>>> Stashed changes
        </div>
    );
}

<<<<<<< Updated upstream
export default VolumeProgress
=======
export default VolumeProgress;
>>>>>>> Stashed changes
