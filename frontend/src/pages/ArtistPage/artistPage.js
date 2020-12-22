import React from "react";
import { NavLink } from 'react-router-dom'
import SearchBar from "../../components/SearchBar/searchBar";
import ArtistName from "../../components/ArtistName/artistName";
import ArtistImage from "../../components/ArtistImage/artistImage";
import ArtistPrice from "../../components/ArtistPrice/artistPrice";
import ArtistPriceGraph from "../../components/ArtistPriceGraph/artistPriceGraph";
import ArtistVideo from "../../components/ArtistVideo/artistVideo";
import BubbleDisplay from "../../components/BubbleDisplay/bubbleDisplay";
import EcosystemButton from "../../components/Buttons/ecosystemButton";

import "./artistPage.scss";

/*
 supplyHeadline: 'Circulating Supply',
        TotalSupplyHeadline: 'Total Supply',
        NextTokenRealeaseHeadline: 'Next Token Realease'
 */

const ArtistPage = (props) => {

    // bubble component
    const configSupplyHeadline = {
        supplyHeadline: 'Circulating Supply',
    }
    const configTotalSupplyHeadline = {
        totalSupplyHeadline: 'Total Supply',
    }
    const configNextTokenRealeaseHeadline = {
        nextTokenRealeaseHeadline: 'Token Realease',
    }

    // price component
    const configPriceHeadline = {
        headline: 'Price'
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
          <ArtistPrice {...configPriceHeadline}>
              $48.30
          </ArtistPrice>
        </div>
        <ArtistPriceGraph />
        <ArtistVideo />
        <div className='bubble-container'>
          <BubbleDisplay {...configSupplyHeadline}>
              18.8M
          </BubbleDisplay>

          <BubbleDisplay {...configTotalSupplyHeadline}>
              80.9M
          </BubbleDisplay>
          
          <BubbleDisplay {...configNextTokenRealeaseHeadline}>
              25
          </BubbleDisplay>
        </div>
        <div>
            <NavLink to="/eco-manage-page">
                <EcosystemButton>
                    Ecosystem Management
                </EcosystemButton>
            </NavLink>
        </div>
      </section>
    </div>
  );
};

export default ArtistPage;
