<<<<<<< Updated upstream
import styles from "./buttons.module.scss";

function ButtonNext() {
    return(
        <div className={styles["player__btn-next"]}>
            <svg className={styles["player__btn-next-svg"]} alt="next">
=======
function ButtonNext() {
    return(
        <div className="player__btn-next">
            <svg className="player__btn-next-svg" alt="next">
>>>>>>> Stashed changes
                <use href="img/icon/sprite.svg#icon-next" />
            </svg>
        </div>
    );
}

export default ButtonNext