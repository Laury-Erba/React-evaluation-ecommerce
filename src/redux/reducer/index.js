import itemReducer from "./itemReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({ itemReducer, userReducer });

export default rootReducers;
