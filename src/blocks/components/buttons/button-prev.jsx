import styles from "./buttons.module.scss";

function ButtonPrev() {
    return(
        <div className={styles["player__btn-prev"]}>
            <svg className={styles["player__btn-prev-svg"]} alt="prev">
                <use href="img/icon/sprite.svg#icon-prev" />
            </svg>
        </div>
    );
}

export default ButtonPrev