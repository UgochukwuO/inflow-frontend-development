import React from "react";
import TradingButton from "../../components/Buttons/tradingButton";
import SearchBar from "../../components/SearchBar/searchBar";
import SupplyCard from "../../components/SupplyCard/supplyCard";
import ArtistPriceGraph from "../../components/ArtistPriceGraph/artistPriceGraph";
import IncentiveCard from "../../components/IncentiveCard/incentiveCard";

import "./ecoManagePage.scss";
import AirDropTokens from "../../components/AirDropTokens/airDropTokens";
import ConcertVoting from "../../components/ConcertVoting/concertVoting";

const EcoManagePage = (props) => {
  return (
    <div>
      <div className="eco-manage-page">
        <div className="trade-button-align">
          <TradingButton>Trade | Liquidity Pool</TradingButton>
        </div>
        <SearchBar />
        <p>Incentives and Rewards</p>
        <div className="eco-card">
          <div className="card1">
            <div>
              <SupplyCard />
            </div>
            <div>
              <ArtistPriceGraph />
            </div>
          </div>
          <div className="card2">
            <div>
              <AirDropTokens />
            </div>
            <div>
              <ConcertVoting />
            </div>
          </div>
        </div>
        <div>
        <IncentiveCard />
        </div>
      </div>
    </div>
  );
};

export default EcoManagePage;
