import React, { useEffect } from "react";
import VideoPlayer from "../VideoPlayer";
import video1 from '../../../public/Videos/JavaScriptProgramming.mp4'
import video2 from '../../../public/Videos/redux_beginner_advanced.mp4'
import './VideoContainer.css'
import { useDispatch, useSelector, connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchVideoData, selectVideoData } from "../../reducers/videoSlice";
import withRouter from "../../withRouter";
import {me} from '../../reducers/auth'

const VideoContainer = () => {
  const {videoId} = useParams();
  const dispatch = useDispatch();
  const videoData = useSelector(selectVideoData);
  console.log('videoData ', videoData);

  let video = video1;

  useEffect(() => {
    if (videoId === 2) {
      video = video2;
    }
  }, [videoId]);
  
  // useEffect (() => {
  //   async function getVideoData () {
  //     await dispatch(fetchVideoData(parseInt(videoId)))
  //   }

  //   getVideoData();
  // },[dispatch]);

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

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

export default withRouter(connect(mapState, mapDispatch)(VideoContainer));

// export default VideoContainer;
