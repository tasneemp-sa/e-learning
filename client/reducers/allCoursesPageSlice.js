import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllCoursesPage = createAsyncThunk(
  "courses/fetchAll",
  async () => {
    const { data } = await axios.get("/api/courses");
    return data;
  }
);

export const allCoursesPageSlice = createSlice({
  name: "allCoursesPage",
  initialState: {
    allCourses: [],
  },
  reducers: {
  },
  extraReducers: (build) => {
    build
      .addCase(fetchAllCoursesPage.fulfilled, (state, action) => {
        state.allCourses = action.payload;
      });
  },
});

export default allCoursesPageSlice.reducer;
