import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBookData = createAsyncThunk(
  "bookData/fetch",
  async (bookId) => {
    bookId = parseInt(bookId);
    const { data } = await axios.get(`/api/reader/${bookId}`);
    return data;
  }
);

export const readerSlice = createSlice({
  name: "reader",
  initialState: {
    bookData: {},
  },
  reducers: {
  },
  extraReducers: (build) => {
    build
      .addCase(fetchBookData.fulfilled, (state, action) => {
        console.log('action.payload', action.payload)
        state.bookData = action.payload;
      });
  },
});

export const selectBookData = (state) => {
  return state.reader.bookData;
};

export default readerSlice.reducer;
