import React from 'react'

import './bubbleDisplay.scss'
/*
 supplyHeadline: 'Circulating Supply',
        TotalSupplyHeadline: 'Total Supply',
        NextTokenRealeaseHeadline: 'Next Token Realease'
 */
const BubbleDisplay = ({headline, children}) => {
    return (
        <div className='container'>
            <div className='bubble'>
                {children && children}
            </div>
            <div className='headline'>
                {headline && headline}
            </div>
        </div>
    )
}

export default BubbleDisplay
