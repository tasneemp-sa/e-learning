// import auth from "./auth";
import { configureStore } from "@reduxjs/toolkit";
import allCoursesPageSlice from "../reducers/allCoursesPageSlice";


export const store = configureStore({
  reducer: {
    allCourses: allCoursesPageSlice,
  },
});

export default store;

// export * from "./auth";
