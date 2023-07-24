<<<<<<< Updated upstream
import styles from "./buttons.module.scss";

function ButtonDislike() {
    return(
        <div className={` ${styles['track-play__dislike']} ${styles['_btn-icon']} `}>
            <svg className={styles['track-play__dislike-svg']} alt="dislike">
=======
function ButtonDislike() {
    return(
        <div className="track-play__dislike _btn-icon">
            <svg className="track-play__dislike-svg" alt="dislike">
>>>>>>> Stashed changes
                <use href="img/icon/sprite.svg#icon-dislike" />
            </svg>
        </div>
    );
}

export default ButtonDislike