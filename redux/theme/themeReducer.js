import { DARK_MODE, LIGHT_MODE } from "../types";
const initialState = {
  isThemeActive: false,
  isStored: null,
};
const ThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIGHT_MODE:
      return {
        ...state,
        isThemeActive: action.payload.lightMode,
      };
    case DARK_MODE:
      return {
        ...state,
        isThemeActive: action.payload.darkMode,
      };
    default:
      return state;
  }
};
export default ThemeReducer;
