import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingle = createAsyncThunk(
    'single/fetchSingle',
    async() => {
        const data = await axios(`https://api.alquran.cloud/v1/surah/${number}`)
    }
)

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
