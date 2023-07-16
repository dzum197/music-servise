<<<<<<< Updated upstream
import React from 'react';
=======
// import React from "react";
>>>>>>> Stashed changes
import Main from './blocks/main';
import Bar from './blocks/bar';

import global from "./global.module.css";
import styles from "./container.module.css";

function Container() {
    return (
<<<<<<< Updated upstream
    <div className="container">
        <Main />
        <Bar />
    </div>
=======
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <Main />
            <Bar />
            <Footer />
          </div>
        </div>
>>>>>>> Stashed changes
    );
}

export default Container;