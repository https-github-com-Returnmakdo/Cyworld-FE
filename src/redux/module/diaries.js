import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const SERVER = process.env.REACT_APP_SERVER;

// Diary 가져오기
export const __getDiary = createAsyncThunk("diaries/getDiary", async (payload, thunkAPI) => {
  try {
    const { data } = await axios.get("http://3.34.122.31/api/diaries/1");
    return thunkAPI.fulfillWithValue(data);
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

// Diary 삭제
export const __deleteDiary = createAsyncThunk("diaries/deleteDiary", async (payload, thunkAPI) => {
  try {
    await axios.delete(`http://3.34.122.31/api/diaries/${payload}/1`);
    return thunkAPI.fulfillWithValue(payload);
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

// Diary 수정
export const __editDiary = createAsyncThunk("diaries/editDiary", async (payload, thunkAPI) => {
  // payload로 diaryId가 와야함
  try {
    const { data } = await axios.put(`http://3.34.122.31/api/diaries/${payload}/1`, payload);
    return thunkAPI.fulfillWithValue(data);
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

const initialState = {
  diaries: [],
  isLoading: false,
  error: null,
};

const diariesSlice = createSlice({
  name: "diaries",
  initialState,
  reducers: {},
  extraReducers: {
    [__getDiary.pending]: (state) => {
      state.isLoading = true;
    },
    [__getDiary.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.diaries = action.payload;
    },
    [__getDiary.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteDiary.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteDiary.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.diaries = state.diaries.data.filter((diary) => diary.diaryId !== action.payload);
    },
    [__deleteDiary.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__editDiary.fulfilled]: (state, action) => {
      state.isLoading = false;
      const idx = state.diaries.findIndex((diary) => diary.diaryId === action.payload.diaryId);
      state.diaries[idx] = action.payload;
    },
  },
});

export default diariesSlice.reducer;