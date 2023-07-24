<<<<<<< Updated upstream
import styles from "./buttons.module.scss";

function ButtonPrev() {
    return(
        <div className={styles["player__btn-prev"]}>
            <svg className={styles["player__btn-prev-svg"]} alt="prev">
=======
function ButtonPrev() {
    return(
        <div className="player__btn-prev">
            <svg className="player__btn-prev-svg" alt="prev">
>>>>>>> Stashed changes
                <use href="img/icon/sprite.svg#icon-prev" />
            </svg>
        </div>
    );
}

export default ButtonPrev