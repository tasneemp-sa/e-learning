// import auth from "./auth";
import { configureStore } from "@reduxjs/toolkit";
import allCoursesPageSlice from "../reducers/allCoursesPageSlice";
import readerSlice from "../reducers/readerSlice";
import singleCoursePageSlice from "../reducers/singleCoursePageSlice";


export const store = configureStore({
  reducer: {
    allCourses: allCoursesPageSlice,
    singleCourse: singleCoursePageSlice,
    reader: readerSlice
  },
});

export default store;

// export * from "./auth";
