import React, {useRef, useState} from 'react';
import "./Video.css";
import VideoFooter from "./VideoFooter"
import VideoSideBar from './VideoSideBar';

function Video() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const handleVideoPress = () => {
if(playing){
    videoRef.current.pause();
    setPlaying(false);
}
else{
    videoRef.current.play();
    setPlaying(true);
}

    }
    return (
        <div className="video">
            <video 
            onClick={handleVideoPress}
            className='video__player'
            loop
            ref={videoRef}>
            <source src="/Videos/6911735648202411270.mp4" type="video/mp4"/>
            </video>
            <VideoFooter/>
            <VideoSideBar />
        </div>
    );
}

export default Video;
