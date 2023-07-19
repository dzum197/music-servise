import React from 'react';

import styles from "./playlist-item.module.css";

import SkelAuthor from "../components/skeleton/skeleton-author";
import SkelImage from "../components/skeleton/skeleton-image";
import SkelTitle from "../components/skeleton/skeleton-title";

function SkelRenderCenterblock() {
    return (
      <div className={styles.playlist__item}>
        <div className={`${styles.playlist__track} ${styles.track}`}>
          <div className={styles.track__title}>
            <SkelImage />
            <SkelTitle />
          </div>

          <SkelAuthor />
          <SkelTitle />
        </div>
      </div>
    );
}

export default SkelRenderCenterblock