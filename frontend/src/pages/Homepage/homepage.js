import React from 'react';
import SearchBar from '../../components/SearchBar/searchBar'
import DiscoveryCard from '../../components/DiscoveryCard/discoveryCard'
import DefaultButton from '../../components/Buttons/defaultButton'
import TradingButton from '../../components/Buttons/tradingButton'
import RecentSongs from '../../components/RecentSongs/recentSongs'

import './homepage.scss';

//<Directory />

const Homepage = props => {
  return (
    <div>
    <section className="homepage">
      <div className='trade-button-align'>
        <TradingButton>
          Trade | Liquidity Pool
        </TradingButton>
      </div>
      <SearchBar />
      <DiscoveryCard />
      <div className='button-div'>
        <div className='button-container'>
        <DefaultButton>
          Hip hop
        </DefaultButton>
        <DefaultButton>
          R&B
        </DefaultButton>
        <DefaultButton>
          Trap
        </DefaultButton>
        </div>
      </div>
      <RecentSongs />
    </section>
    </div>
  );
};

export default Homepage;