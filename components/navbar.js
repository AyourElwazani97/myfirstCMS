import React, { useEffect } from "react";
import styles from "../styles/Home.module.scss";
import { FaMoon } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { darkTheme, lightTheme } from "../redux/theme/themeactionCreators";
export const NavBar = () => {
  const checkTheme = useSelector((state) => state.isThemeActive);
  const dispatch = useDispatch();
  return (
    <div className={styles.__navbar}>
      <nav>
        <ul>
          <li style={checkTheme ? { color: "purple" } : { color: "red" }}>
            Home
          </li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className={styles.navbar_mbl}>
          <span onClick={() => dispatch(darkTheme())}>
            <FaMoon />
          </span>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
