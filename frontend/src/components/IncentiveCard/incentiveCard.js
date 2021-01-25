import React from 'react'
import DefaultButton from '../Buttons/defaultButton'
import ProgressBar from '../ProgressBar/progressBar'

import './incentiveCard.scss'

const IncentiveCard = () => {
    return (
        <div className='incentive-card'>
      <div className="title">
        <a>TOKEN NAME</a>
      </div>
      <div className="incentive-data">
          <div className="incentive-div-alignment">1hr Facetime call: 80 Tokens</div>
            <div className='incentive-purchase-btn'>
              <DefaultButton>
                Purchase
              </DefaultButton>
            </div>

          <div className="incentive-div-alignment">Release Song: 1,000 Tokens</div>
            <div>
              <ProgressBar />
            </div>

          <div className="incentive-div-alignment">Album Release: 60,000 Tokens</div>
            <div>
              <ProgressBar />
            </div>
      </div>
    </div>
    )
}

export default IncentiveCard
