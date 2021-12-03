import React, { useEffect } from "react";
import styles from "../styles/Home.module.scss";
export const NavBar = () => {

  return (
    <div className={styles.__navbar}>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className={styles.navbar_mbl}>
          <span></span>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
