import { createSlice } from "@reduxjs/toolkit";

export const apiSlice = createSlice({
  name: "apikey",
  initialState: {
    key: "",
    username: "deneme",
    myarray: [],
  },
  reducers: {
    setkey: (state, key) => {
      state.key = key.payload;
    },
    pusharray: (state, key) => {
      state.myarray.push(key.payload);
      console.log(key.type);
    },
  },
});

export const { setkey, pusharray } = apiSlice.actions;
export default apiSlice.reducer;
