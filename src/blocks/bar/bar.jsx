import styles from "../bar.module.css";

import PlayerBlock from "./bar/player-block";

function Bar() {
  return (
    <div className={styles.bar}>
      <div className={styles.bar__content}>
        <PlayerBlock />
      </div>
    </div>
  );
}

export default Bar;