<<<<<<< Updated upstream
import styles from "./buttons.module.scss";

function ButtonShuffle() {
  return (
    <div
      className={` ${styles["player__btn-shuffle"]} ${styles["_btn-icon"]} `}
    >
      <svg className={styles["player__btn-shuffle-svg"]} alt="shuffle">
        <use href="img/icon/sprite.svg#icon-shuffle" />
      </svg>
    </div>
  );
}

export default ButtonShuffle;
=======
function ButtonShuffle() {
    return(
        <div className="player__btn-shuffle _btn-icon">
            <svg className="player__btn-shuffle-svg" alt="shuffle">
                <use href="img/icon/sprite.svg#icon-shuffle" />
            </svg>
        </div>
    );
}

export default ButtonShuffle
>>>>>>> Stashed changes
