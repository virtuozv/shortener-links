import { combineReducers } from "@reduxjs/toolkit";
import getListOfLinks from "./getListLinks";
const rootReducer = combineReducers({
  data: getListOfLinks,
});
export default rootReducer;
