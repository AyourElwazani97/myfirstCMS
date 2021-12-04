import { DARK_MODE, LIGHT_MODE } from "../types";
const initialState = {
  isThemeActive: false,
  isStored: false,
};
const ThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIGHT_MODE:
      return {
        ...state,
        isThemeActive: action.payload.lightMode,
        isStored: action.payload.storeTheme,
      };
    case DARK_MODE:
      return {
        ...state,
        isThemeActive: action.payload.darkMode,
        isStored: action.payload.storeTheme,
      };
    default:
      return state;
  }
};
export default ThemeReducer;
