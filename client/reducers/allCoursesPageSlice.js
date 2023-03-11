import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllCoursesPage = createAsyncThunk(
  "courses/fetchAll",
  async () => {
    const { data } = await axios.get("/api/courses");
    return data;
  }
);

export const fetchAllSubCategoryCourses = createAsyncThunk(
  "courses_sub_category/fetchAll",
  async (subCategoryId) => {
    subCategoryId = parseInt(subCategoryId);
    const { data } = await axios.get(`/api/subCategories/${subCategoryId}`);
    return data;
  }
);

export const allCoursesPageSlice = createSlice({
  name: "allCoursesPage",
  initialState: {
    allCourses: [],
    allSubCourses: []
  },
  reducers: {
  },
  extraReducers: (build) => {
    build
      .addCase(fetchAllCoursesPage.fulfilled, (state, action) => {
        state.allCourses = action.payload;
      })
      .addCase(fetchAllSubCategoryCourses.fulfilled, (state, action) => {
        state.allSubCourses = action.payload;
      });
  },
});

export const selectSubCourses = (state) => {
  return state.allCourses.allSubCourses;
};

export default allCoursesPageSlice.reducer;
