import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingle = createAsyncThunk(
  "single/fetchSingle",
  async (number) => {
    const data = await axios(
      `https://api.alquran.cloud/v1/surah/${number}`
    ).then((res) => res.data);
    return data;
  }
);

const initialState = {
  single: [],
};

const singleQuran = createSlice({
  name: "single",
  initialState,
  reducers: {},
});

export const {} = singleQuran.actions;
export default singleQuran.reducer;
