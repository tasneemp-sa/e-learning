import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllCourses = createAsyncThunk(
  "courses/fetchAll",
  async () => {
    const { data } = await axios.get("/api/courses");
    return data;
  }
);

export const homePageSlice = createSlice({
    name: "homePage",
    initialState: {
      allCourses: []
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchAllCourses.fulfilled, (state, action) => {
          state.allCourses =  action.payload;
        })
      }
  });

  export const selectAllProducts = (state) => {
    return state.homePage.allCourses;
  };


export default homePageSlice.reducer