import React from "react";
import TradingButton from "../../components/Buttons/tradingButton";
import SearchBar from '../../components/SearchBar/searchBar'

import "./ecoManagePage.scss";

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
      </section>
    </div>
  );
};

export default EcoManagePage;
