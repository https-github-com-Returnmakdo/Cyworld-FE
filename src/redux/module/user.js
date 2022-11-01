import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const SERVER = process.env.REACT_APP_SERVER;

/*초기값*/
const initialState = {};

/*유저정보 가져오기*/
export const __userInfo = createAsyncThunk(
  "users/userInfo",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
);

/*유저 토큰 보내기*/
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default userSlice.reducer;
