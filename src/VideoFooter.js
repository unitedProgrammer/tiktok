import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function VideoFooter() {
    return (
        <div className='videoFooter'>
            <div className="videoFooter_text">
                <h3>@dima</h3>
                <p>this is dex</p>
                <div className="videoFooter_ticker">
                    <MusicNoteIcon className="videoFooter_icon"/>

                    <Ticker mode="smooth">
                    {({index})=>(
                        <>
                        <p>i am a song</p>
                        </>
                    )}
                    </Ticker>
                </div>
            </div>
            <img className="videoFooter_record"
            src="https://static.thenounproject.com/png/934821-200.png"
            alt=""
            />
        </div>
    );
}

export default VideoFooter;
