import ThemeReducer from "./redux/theme/themeReducer";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(ThemeReducer, composeWithDevTools(applyMiddleware()));
export default store;
