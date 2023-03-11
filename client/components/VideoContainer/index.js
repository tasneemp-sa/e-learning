import React, { useEffect } from "react";
import VideoPlayer from "../VideoPlayer";
import video1 from '../../../public/Videos/JavaScriptProgramming.mp4'
import video2 from '../../../public/Videos/redux_beginner_advanced.mp4'
import './VideoContainer.css'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchVideoData, selectVideoData } from "../../reducers/videoSlice";

const VideoContainer = () => {
  const {videoId} = useParams();
  const dispatch = useDispatch();
  const videoData = useSelector(selectVideoData);
  console.log('videoData ', videoData);

  let video = video1;
  if (videoData.id === 2) {
    video = video2;
  }
  
  useEffect (() => {
    async function getVideoData () {
      await dispatch(fetchVideoData(parseInt(videoId)))
    }

    getVideoData();
  },[dispatch]);

    const videoJsOptions = {
        autoplay: false,
        controls: true,
        sources: [{
            src: video,
            type: 'video/mp4'
        }]
    }


  return (
    <div className="video-container">
        <VideoPlayer options={videoJsOptions}/>
    </div>
  );
};

export default VideoContainer;
