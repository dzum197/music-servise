import styles from "./buttons.module.scss";

function ButtonPlay() {
    return(
        // eslint-disable-next-line no-underscore-dangle
        <div className={` ${styles["player__btn-play"]} ${styles._btn} `}>
            <svg className={styles["player__btn-play-svg"]} alt="play">
                <use href="img/icon/sprite.svg#icon-play" />
            </svg>
        </div>
    );
}

export default ButtonPlay
