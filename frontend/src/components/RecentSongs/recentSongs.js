import React from "react";
import SmallPlayIcon from "../PlayIcon/smallPlayIcon";
import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';

import "./recentSongs.scss";

/* 
<IconContext.Provider value={{ size: '', color: '#4AD295'}}>
          <span>$28.30<RiIcons.RiArrowUpSFill/>%</span>
          </IconContext.Provider>

          //Under Play Circle
*/

const RecentSongs = () => {
  return (
    <IconContext.Provider value={{ color: '#4AD295'}}>
    <div className='recent-songs-card'>
      <div className="title">
        <a>ARTIST NAME</a>
        <a>RECENT SONG</a>
        <a>PRICE</a>
      </div>
      <div className="artist-data">
          <span className="recent-song-div-alignment">$Playboi Carti</span>
          <span><AiIcons.AiFillPlayCircle /> Whole lotta red</span>
          <span>$28.30</span>

          <span className="recent-song-div-alignment">$Playboi Carti</span>
          <span><AiIcons.AiFillPlayCircle /> Whole lotta red</span>
          <span>$28.30</span>
          

          <span className="recent-song-div-alignment">$Playboi Carti</span>
          <span><AiIcons.AiFillPlayCircle /> Whole lotta red</span>
          <span>$28.30</span>

          
      </div>
    </div>
    </IconContext.Provider>
  );
};

export default RecentSongs;
