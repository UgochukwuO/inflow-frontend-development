import React from "react";
import SearchBar from "../../components/SearchBar/searchBar";
import ArtistName from "../../components/ArtistName/artistName";
import ArtistImage from "../../components/ArtistImage/artistImage";
import ArtistPrice from "../../components/ArtistPrice/artistPrice";
import ArtistPriceGraph from "../../components/ArtistPriceGraph/artistPriceGraph";
import ArtistVideo from "../../components/ArtistVideo/artistVideo";
import BubbleDisplay from "../../components/BubbleDisplay/bubbleDisplay";

import "./artistPage.scss";

/*
 supplyHeadline: 'Circulating Supply',
        TotalSupplyHeadline: 'Total Supply',
        NextTokenRealeaseHeadline: 'Next Token Realease'
 */

const ArtistPage = (props) => {

    const configBubbleDisplay = {
        headline: 'Circulating Supply'
    }

  return (
    <div>
      <section className="artist-page">
        <SearchBar />
        <div className="name-image">
          <ArtistName>Smino</ArtistName>
          <ArtistImage />
        </div>
        <div>
          <ArtistPrice />
        </div>
        <ArtistPriceGraph />
        <ArtistVideo />
        <div className='bubble-container'>
          <BubbleDisplay {...configBubbleDisplay}>
              18.8M
          </BubbleDisplay>
          <BubbleDisplay {...configBubbleDisplay}>
              80.9M
          </BubbleDisplay>
          <BubbleDisplay {...configBubbleDisplay}>
              25
          </BubbleDisplay>
        </div>
      </section>
    </div>
  );
};

export default ArtistPage;
