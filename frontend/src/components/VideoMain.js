import React from "react";
import "../styles/video.css";

function VideoMain() {
  return (
    <>
      <div className="">
        <video className="video" src={process.env.PUBLIC_URL+"../assets/videomainpareja.mp4"} autoPlay loop />
      </div>
    </>
  );
}

export default VideoMain;
