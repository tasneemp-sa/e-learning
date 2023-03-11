// import auth from "./auth";
import { configureStore } from "@reduxjs/toolkit";
import allCoursesPageSlice from "../reducers/allCoursesPageSlice";
import auth from "../reducers/auth";
import readerSlice from "../reducers/readerSlice";
import singleCoursePageSlice from "../reducers/singleCoursePageSlice";
import videoSlice from "../reducers/videoSlice";


export const store = configureStore({
  reducer: {
    allCourses: allCoursesPageSlice,
    singleCourse: singleCoursePageSlice,
    reader: readerSlice,
    video: videoSlice,
    auth: auth
  },
});

export default store;

// export * from "./auth";
