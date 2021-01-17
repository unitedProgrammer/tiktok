import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <div className="app_videos">
        <Video
          url="Videos/6911735648202411270.mp4"
          channel="dima"
          description="wooooow dex"
          song="charlie.wav"
          likes={123}
          messages={456}
          shares={999}
        />
        <Video
          url="Videos/6911735648202411270.mp4"
          channel="dima"
          description="wooooow dex"
          song="charlie.wav"
          likes={123}
          messages={456}
          shares={999}
        />
      </div>
    </div>
  );
}

export default App;
