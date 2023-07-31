/* eslint-disable import/no-unresolved */
// import React from 'react';

import styles from "./playlist-item.module.css";

import SkelAuthor from "../../components/skeleton/skeleton-author";
import SkelImage from "../../components/skeleton/skeleton-image";
import SkelTitle from "../../components/skeleton/skeleton-title";
import SkelNameTrack from "../../components/skeleton/skeleton-name_track";

function SkelRenderCenterblock() {
    return (
      <div className={styles.playlist__item}>
        <div className={`${styles.playlist__track} ${styles.track}`}>
          <div className={styles.track__title}>
            <SkelImage />
            <SkelTitle />
          </div>

          <SkelAuthor />
          <SkelNameTrack />
        </div>
      </div>
    );
}

export default SkelRenderCenterblock