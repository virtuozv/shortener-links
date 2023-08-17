import { combineReducers } from "@reduxjs/toolkit";
import { listReducer } from "./listLinksSlice";
const rootReducer = combineReducers({
  data: listReducer,
  // pages: getMyList,
  // myDataList: getPageSettings,
});
export default rootReducer;
