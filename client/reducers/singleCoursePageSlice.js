import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSingleCourse = createAsyncThunk(
  "course/fetch",
  async (id) => {
    id = parseInt(id);
    const { data } = await axios.get(`/api/courses/${id}`);
    return data;
  }
);

export const singleCoursePageSlice = createSlice({
  name: "singleCoursePage",
  initialState: {
    singleCourse: {},
  },
  reducers: {
  },
  extraReducers: (build) => {
    build
      .addCase(fetchSingleCourse.fulfilled, (state, action) => {
        console.log('action.payload', action.payload)
        state.singleCourse = action.payload;
      });
  },
});

export const selectSingleCourse = (state) => {
  return state.singleCourse.singleCourse;
};

export default singleCoursePageSlice.reducer;
