import { LIGHT_MODE, DARK_MODE } from "../types";

export const lightTheme = () => {
  return {
    type: LIGHT_MODE,
    payload: {
      lightMode: false,
      storeTheme: localStorage.removeItem("Theme"),
    },
  };
};
export const darkTheme = () => {
  return {
    type: DARK_MODE,
    payload: {
      darkMode: true,
      storeTheme: localStorage.setItem("Theme", "true"),
    },
  };
};
