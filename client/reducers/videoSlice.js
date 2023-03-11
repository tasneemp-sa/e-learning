import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchVideoData = createAsyncThunk(
  "videoData/fetch",
  async (videoId) => {
    videoId = parseInt(videoId);
    const { data } = await axios.get(`/api/video-player/${videoId}`);
    return data;
  }
);

export const videoSlice = createSlice({
  name: "video-player",
  initialState: {
    videoData: {},
  },
  reducers: {
  },
  extraReducers: (build) => {
    build
      .addCase(fetchVideoData.fulfilled, (state, action) => {
        console.log('action.payload', action.payload)
        state.videoData = action.payload;
      });
  },
});

export const selectVideoData = (state) => {
  return state.video.videoData;
};

export default videoSlice.reducer;
