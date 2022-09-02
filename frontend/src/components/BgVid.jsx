import React from "react";

// import bg_vid from "../static/bg-vid.mp4";
import "./BgVid.scss";

const BgVid = () => {
  return (
    <>
      <video id="bg_video" muted loop autoPlay={true} playsInline>
        <source src={"bg_vid"} type="video/mp4" />
      </video>
      <div className="overlay"></div>
    </>
  );
};

export default BgVid;
