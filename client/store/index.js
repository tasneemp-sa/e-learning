// import auth from "./auth";
import { configureStore } from "@reduxjs/toolkit";
import allCoursesPageSlice from "../reducers/allCoursesPageSlice";
import authSlice from "../reducers/auth";
import readerSlice from "../reducers/readerSlice";
import singleCoursePageSlice from "../reducers/singleCoursePageSlice";
import videoSlice from "../reducers/videoSlice";


export const store = configureStore({
  reducer: {
    allCourses: allCoursesPageSlice,
    singleCourse: singleCoursePageSlice,
    reader: readerSlice,
    video: videoSlice,
    auth: authSlice
  },
});

export default store;

// export * from "./auth";
