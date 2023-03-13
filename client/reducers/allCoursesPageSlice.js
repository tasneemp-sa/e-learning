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
    setFilterVideos(state, action) {
      state.allSubCourses = state.allSubCourses.filter(course => course.type === 'video');
      state.allCourses = state.allCourses.filter(course => course.type === 'video');
    },
    setFilterBooks(state, action) {
      state.allSubCourses = state.allSubCourses.filter(course => course.type === 'book');
      state.allCourses = state.allCourses.filter(course => course.type === 'book');
    },
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

export const {setFilterVideos, setFilterBooks} = allCoursesPageSlice.actions;

export const selectSubCourses = (state) => {
  return state.allCourses.allSubCourses;
};

export const selectAllCourses = (state) => {
  return state.allCourses.allCourses;
};

export default allCoursesPageSlice.reducer;
