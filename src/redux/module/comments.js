import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// 댓글 추가
export const __addComment = createAsyncThunk("comments/addComment", async (payload, thunkApi) => {
  try {
    const { data } = await axios.post(`http://3.34.122.31/api/diaries/comments/${payload.diaryId}/1`, payload);
    return thunkApi.fulfillWithValue(data);
  } catch (e) {
    return thunkApi.rejectWithValue(e);
  }
});

// 댓글 불러오기
export const __getComment = createAsyncThunk("comments/getComment", async (payload, thunkApi) => {
  try {
    const { data } = await axios.get(`http://3.34.122.31/api/diaries/comments/1`);
    return thunkApi.fulfillWithValue(data);
  } catch (e) {
    return thunkApi.rejectWithValue(e);
  }
});

const initialState = {
  comment: [],
  isLoading: false,
  error: null,
};

export const commentsSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    [__addComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = [action.payload, ...state.comment];
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = action.payload;
    },
    [__getComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default commentsSlice.reducer;
