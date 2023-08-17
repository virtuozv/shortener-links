import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
};
const getListOfLinks = createSlice({
  name: "list",
  initialState,
  reducers: {
    listReducer: (state, action) => {
      state.data = action.payload;
    },
    // getPageSettings: (state, action) => {
    //   state.data = action.payload;
    // },
    // getMyList: (state, action) => {
    //   state.data = action.payload;
    // },
  },
});
export const { listReducer } = getListOfLinks.actions;
export default getListOfLinks.reducer;
