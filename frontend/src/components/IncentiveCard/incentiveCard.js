import React from 'react'

import './incentiveCard.scss'

const IncentiveCard = () => {
    return (
        <div className='incentive-card'>
      <div className="title">
        <a>TOKEN NAME</a>
      </div>
      <div className="incentive-data">
          <div style={{textAlign: 'left', paddingLeft: '10px'}}>1hr facetime call: 80 Tokens</div>
          <div>Purchase</div>

          <div style={{textAlign: 'left', paddingLeft: '10px'}}>Release Song: 1,000 Tokens</div>
          <div>Bar</div>

          <div style={{textAlign: 'left', paddingLeft: '10px'}}>Album Release: 60,000 Tokens</div>
          <div>bar</div>
      </div>
    </div>
    )
}

export default IncentiveCard
