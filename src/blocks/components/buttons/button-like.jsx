<<<<<<< Updated upstream
import styles from "./buttons.module.scss";

function ButtonLike() {
    return(
        <div className={` ${styles['track-play__like']} ${styles['_btn-icon']} `}>
            <svg className={styles['track-play__like-svg']} alt="like">
=======
function ButtonLike() {
    return(
        <div className="track-play__like _btn-icon">
            <svg className="track-play__like-svg" alt="like">
>>>>>>> Stashed changes
                <use href="img/icon/sprite.svg#icon-like" />
            </svg>
        </div>
    );
}

export default ButtonLike