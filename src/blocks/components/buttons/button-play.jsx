import styles from "./buttons.module.scss";

<<<<<<< Updated upstream
function ButtonPlay() {
    return(
        <div className={` ${styles["player__btn-play"]} ${styles._btn} `}>
            <svg className={styles["player__btn-play-svg"]} alt="play">
                <use href="img/icon/sprite.svg#icon-play" />
            </svg>
        </div>
    );
}

export default ButtonPlay
=======
function ButtonPlay({ func }) {

    function playBtn() {
        func(true)
    }

  return (
    <div onClick={playBtn} className={` ${styles["player__btn-play"]} ${styles._btn} `}>
      <svg className={styles["player__btn-play-svg"]} alt="play">
        <use href="img/icon/sprite.svg#icon-play" />
      </svg>
    </div>
  );
}

export default ButtonPlay;
>>>>>>> Stashed changes
