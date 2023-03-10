import React from "react";
import VideoPlayer from "../VideoPlayer";
import video from '../../../public/Videos/redux_beginner_advanced.mp4'
import './VideoContainer.css'

const VideoContainer = () =>
 {
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
