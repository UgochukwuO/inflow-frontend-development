import React from 'react'

import './rosterScore.scss'

const RosterScore = ({headline, children}) => {
    return (
        <div className='label-price'>
            <div className='title'>
                {headline && headline}
            </div>

            <div className='price'>
                {children && children}
            </div>
        </div>
    )
}

export default RosterScore
