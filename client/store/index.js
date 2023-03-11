// import auth from "./auth";
import { configureStore } from "@reduxjs/toolkit";
import allCoursesPageSlice from "../reducers/allCoursesPageSlice";
import singleCoursePageSlice from "../reducers/singleCoursePageSlice";


export const store = configureStore({
  reducer: {
    allCourses: allCoursesPageSlice,
    singleCourse: singleCoursePageSlice
  },
});

export default store;

// export * from "./auth";
