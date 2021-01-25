import React from "react";
import "./discoveryCard.scss";
import * as FiIcons from "react-icons/fi";

import ArtistVideoData from '../SlideShow/artistVideoData';
import ArtistSlideShow from "../SlideShow/artistSlideShow";

//<FiIcons.FiPlay />

const ArtistCard = () => {
  return (
    <div className="card">
      <div className="container">
        <div>
          <ArtistSlideShow slides={ArtistVideoData} />
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;