/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable camelcase */

// import React from 'react';
import styles from "./main.module.css";

// const { useState, useEffect } = React;
import Nav from "./nav/nav";
import CenterBlock from "./centerblock/centerblock";
import SlideBar from "./sidebar/sidebar";


function Main() {
    return (
        <div className={styles.main}>
          <Nav />
          <CenterBlock />
          <SlideBar />
        </div>
      );
}

export default Main;
