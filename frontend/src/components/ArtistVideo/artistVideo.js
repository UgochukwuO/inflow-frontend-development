import React from "react";

import "./artistVideo.scss";

const ArtistVideo = () => {
  return (
    <div className='video-embed'>
      <iframe
      className="video"
        width="1020"
        height="630"
        src="https://www.youtube.com/embed/Uc7u3A8YWCw?version=3&vq=hd1080"
        frameborder="0"
        allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        marginheight="0" 
        marginwidth="0"
        scrolling="auto"
      ></iframe>
    </div>
  );
};

export default ArtistVideo;
