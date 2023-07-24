<<<<<<< Updated upstream
import styles from "./buttons.module.scss";

function ButtonRepeat() {
    return(
        <div className={` ${styles["player__btn-repeat"]} ${styles["_btn-icon"]} `}>
            <svg className={styles["player__btn-repeat-svg"]} alt="repeat">
=======
function ButtonRepeat() {
    return(
        <div className="player__btn-repeat _btn-icon">
            <svg className="player__btn-repeat-svg" alt="repeat">
>>>>>>> Stashed changes
                <use href="img/icon/sprite.svg#icon-repeat" />
            </svg>
        </div>
    );
}

export default ButtonRepeat