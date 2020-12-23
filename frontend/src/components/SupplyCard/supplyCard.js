import React from 'react'

import './supplyCard.scss'

const SupplyCard = () => {

    const totalSupply = "21 M"
    const circulatingSupply = "8 M"
    const nextRelease = "365 Days"

    return (
        <div>
            <div className="supply-card">
                <div className='supply'>
                Total Supply:<div className='supply-data'>{totalSupply}</div>
                </div>
                <div className='supply'>
                Circulating Supply:<div className='supply-data'>{circulatingSupply}</div>
                </div>
                <div className='supply'>
                Next Release:<div className='supply-data'>{nextRelease}</div>
                </div>
            </div>
        </div>
    )
}

export default SupplyCard
