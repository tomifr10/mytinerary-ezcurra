import React from "react";
import videomain from "../assets/videomainpareja.mp4";
import "../styles/video.css";
import Navbar from "./Navbar";
// import Subtitle from "./SubTitle";

function VideoMain() {
  return (
    <>
      <div className="">
        <Navbar />
        <video className="video" src={videomain} autoPlay loop />
      </div>
    </>
  );
}

export default VideoMain;
