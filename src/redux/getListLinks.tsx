import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
};
const getListOfLinks = createSlice({
  name: "links",
  initialState,
  reducers: {
    getLink: (state, action) => {
      // state.data[action.payload.id] = action.payload;
      state.data = action.payload.data;
    },
  },
});
export const { getLink } = getListOfLinks.actions;
export default getListOfLinks.reducer;
