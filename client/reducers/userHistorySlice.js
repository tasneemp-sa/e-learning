import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchUserHistory = createAsyncThunk(
  "userHistory/fetchAll",
  async (userId) => {
    userId= parseInt(userId);
    const { data } = await axios.get(`/api/userHistory/${userId}`);
    return data;
  }
);

export const postUserHistory = createAsyncThunk(
    "userHistory/post",
    async ({userId, courseId}) => {
      userId= parseInt(userId);
      const { data } = await axios.post(`/api/userHistory/${userId}`, {courseId: courseId});
      return data;
    }
  );

  export const getLoggedInUserId = createAsyncThunk("userId/get", async () => {
    const token = window.localStorage.getItem("token");
    if (token) {
      const { data } = await axios.get("/api/userHistory/me", {
        headers: {
          authorization: token,
        },
      });
      return data;
    }
  });

export const userHistorySlice = createSlice({
  name: "userHistory",
  initialState: {
    userHistory: [],
  },
  reducers: {
  },
  extraReducers: (build) => {
    build
      .addCase(fetchUserHistory.fulfilled, (state, action) => {
        state.userHistory = action.payload;
      });
  },
});

export const selectUserHistory = (state) => {
  return state.userHistory.userHistory;
};

export default userHistorySlice.reducer;
