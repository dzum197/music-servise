function TrackTime({time}) {
    return(
        <div className="track__time">
            <svg className="track__time-svg" alt="time">
                <use href="img/icon/sprite.svg#icon-like" />
            </svg>
            <span className="track__time-text">{time}</span>
        </div>
    );
}

export default TrackTime