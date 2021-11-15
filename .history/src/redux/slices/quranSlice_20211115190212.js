import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuranAsync = createAsyncThunk(
  "quran/fetchQuranAsync",
  async () => {
    const data = await axios.get("fetchQuranAsync").then((res) => res);
    return data;
  }
);

const initialState = {
  quran: [],
};

const quranSlice = createSlice({
  name: "quran",
  initialState,
  reducers: {
    removeFetchQuran(state, action) {
      state.quran = [];
    },
  }, extraReducers:{
    [fetch]
  }
});

export const { removeFetchQuran } = quranSlice.actions;
export default quranSlice.reducer;
