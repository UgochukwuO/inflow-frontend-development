import React from "react";
import TradingButton from "../../components/Buttons/tradingButton";
import SearchBar from '../../components/SearchBar/searchBar'
import SupplyCard from '../../components/SupplyCard/supplyCard'
import ArtistPriceGraph from "../../components/ArtistPriceGraph/artistPriceGraph";
import IncentiveCard from '../../components/IncentiveCard/incentiveCard'

import "./ecoManagePage.scss";
import AirDropTokens from "../../components/AirDropTokens/airDropTokens";

const EcoManagePage = props => {
  return (
    <div>
      <section className="eco-manage-page">
        <div className="trading-button">
          <TradingButton>
              Trade | Liquidity Pool
          </TradingButton>
        </div>
        <SearchBar />
        <p>
            Ecosystem Management
        </p>
        <div className='card'>
            <div className='card1'>
                <div>
                    <SupplyCard />
                </div>
                <div>
                    <ArtistPriceGraph />
                </div>
            </div>
            <div className='card2'>
                <div>
                    <AirDropTokens />
                </div>
                <div>
                    <ArtistPriceGraph />
                </div>
            </div>
        </div>
        <IncentiveCard />
      </section>
    </div>
  );
};

export default EcoManagePage;
