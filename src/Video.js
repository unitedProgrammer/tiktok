import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSideBar from "./VideoSideBar";

function Video({ url, channel, description, shares, song, messages, likes }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
      >
        <source src={url} type="video/mp4" />
      </video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSideBar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
