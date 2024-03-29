import React from "react";
import "./discoveryCard.scss";
import * as FiIcons from "react-icons/fi";

import HomeVideoData from '../SlideShow/homeVideoData';
import HomeSlideShow from "../SlideShow/homeSlideShow";


//<FiIcons.FiPlay />

const DiscoveryCard = () => {
  return (
    <div className="card">
      <div className="container">
        <div>
          <HomeSlideShow slides={HomeVideoData} />
        </div>
      </div>
    </div>
  );
};

export default DiscoveryCard;
