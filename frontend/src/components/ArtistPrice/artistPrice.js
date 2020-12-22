import React from 'react'

import './artistPrice.scss'

const ArtistPrice = ({headline, children}) => {
    return (
        <div className='artist-price'>
            <div className='title'>
                {headline && headline}
            </div>

            <div className='price'>
                {children && children}
            </div>
        </div>
    )
}

export default ArtistPrice
