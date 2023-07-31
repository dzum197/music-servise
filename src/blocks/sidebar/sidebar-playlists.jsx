/* eslint-disable import/no-extraneous-dependencies */
// import React from "react";
import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";

function SlideBarPlaylists() {
  return (
    <div className={`${styles.playlists__sidebar} ${styles.sidebar}`}>
      <Link to="/"><img src="img/icon/exit.png" alt="" /></Link>
    </div>
  );
}

export default SlideBarPlaylists;