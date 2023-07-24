<<<<<<< Updated upstream
// import React from 'react';
import Main from './blocks/main';
import Bar from './blocks/bar';
import Footer from './blocks/footer';

function Container() {
    return (
        <div className="wrapper">
            <div className="container">
                <Main />
                <Bar />
                <Footer />
            </div>
=======
// import React from "react";
import { AppRoutes } from "./routes";

import styles from "./container.module.css";

function Container() {
    return (
        <div className={styles.wrapper}>
          <div className={styles.container}>
          <AppRoutes />
          </div>
>>>>>>> Stashed changes
        </div>

    );
}

export default Container