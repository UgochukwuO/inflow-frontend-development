import React from 'react'
import TradingButton from '../../components/Buttons/tradingButton'
import PieChart from '../../components/PieChart/pieChart'
import RecentSongs from '../../components/RecentSongs/recentSongs'
import SearchBar from '../../components/SearchBar/searchBar'

import './wallet.scss'

const Wallet = () => {
    return (
        <div>
            <section className='wallet'>
                <div className='trade-button'>
                    <TradingButton>
                        Trade | Liquidity Pool
                    </TradingButton>
                </div>
                <div>
                    <SearchBar />
                </div>
                <div className='wallet-title'>
                    Wallet
                </div>
                <div>
                    <PieChart />
                </div>
                <div>
                    <RecentSongs />
                </div>
            </section>
        </div>
    )
}

export default Wallet
