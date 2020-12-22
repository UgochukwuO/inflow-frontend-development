import React from 'react'

import './bubbleDisplay.scss'
/*
 supplyHeadline: 'Circulating Supply',
        TotalSupplyHeadline: 'Total Supply',
        NextTokenRealeaseHeadline: 'Next Token Realease'
 */
const BubbleDisplay = ({
    supplyHeadline, 
    totalSupplyHeadline, 
    nextTokenRealeaseHeadline, 
    children
    }) => {
    return (
        <div className='container'>
            <div className='bubble'>
                {children && children}
            </div>
            <div className='headline'>
                {supplyHeadline && supplyHeadline}
            </div>
            <div className='headline'>
                {totalSupplyHeadline && totalSupplyHeadline}
            </div>
            <div className='headline'>
                {nextTokenRealeaseHeadline && nextTokenRealeaseHeadline}
            </div>
        </div>
    )
}

export default BubbleDisplay
