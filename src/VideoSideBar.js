import React from 'react';
import './VideoSideBar.css';
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";


function VideoSideBar() {
    return (
        <div className="videoSidebar">
            <div className= "videoSidebar_button">
<FavoriteIcon fontSize="large"/>
            </div>
            <div className= "videoSidebar_button">
            <MessageIcon fontSize="large"/>
            </div>
            <div className= "videoSidebar_button">
            <ShareIcon fontSize="large"/>
            </div>
        </div>
    )
}

export default VideoSideBar
