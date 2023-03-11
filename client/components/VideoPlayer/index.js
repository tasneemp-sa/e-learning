
import React, {useState, useRef, useEffect} from 'react'
import videojs from 'video.js';
import '../../../node_modules/video.js/dist/video-js.css'

import '@videojs/themes/dist/sea/index.css'

function VideoPlayer({options, themeName="sea"}) {

    const videoRef = useRef(null);
    const playerRef = useRef(null);

    useEffect(() => {
        const player = playerRef.current;

        if (!player) {
            const videoElement = videoRef.current;
            if (!videoElement) return;

            playerRef.current = videojs(videoElement, options)
        }

        return () => {
            if (player) {
                player.dispose();
                playerRef.current = null;
            }
        }
    }, [options, videoRef, playerRef]);

return (
  <div data-vjs-player>
    <video ref={videoRef} className={`video-js vjs-big-play-centered vjs-theme-${themeName}`}/>
  </div>
)
}

export default VideoPlayer;
