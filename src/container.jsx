/* eslint-disable react/jsx-no-constructed-context-values */
// import React from "react"; // const { useState } = React;
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

import styles from "./container.module.css";

import { ThemeContext, themes } from './context/theme'


function Container() {
  const [currentTheme, setCurrentTheme] = useState(themes.dark);

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light);
      return;
    }

    setCurrentTheme(themes.dark);
  }

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme}}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <AppRoutes />
          </div>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default Container;