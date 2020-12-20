import React from 'react'
import './discoveryCard.scss'
import * as FiIcons from 'react-icons/fi'

//<FiIcons.FiPlay />

const DiscoveryCard = () => {
    return (
        <div className='card'>
            <div className='container'>
                <div>
                    <img alt="Kodack Black" src='https://talentrecap.com/wp-content/uploads/2020/05/Kodak-Black-Prison-1200x900.jpg' />
                    <span className='icon'>
                    </span>
                    <div className='container'>
                    <a>Kodack Black</a>
                    <a>$32.84</a>
                    </div>
                    
                </div>         
            </div>
        </div>
    )
}

export default DiscoveryCard
