import React from 'react'

import './concertVoting.scss'

const ConcertVoting = () => {
    return (
        <div className='concert-voting-card'>
            <div>
                Concert Voting
            </div>
            <div className='meter-group'>
                <div>
                    <div className='voting-meter-card'>
                        <div className='voting-meter'>

                        </div>
                    </div>
                    NYC
                    <div>
                        300
                    </div>
                </div>

                <div>
                    <div className='voting-meter-card'>
                        <div className='voting-meter'>

                        </div>
                    </div>
                    LA
                    <div>
                        400
                    </div>
                </div>

                <div>
                    <div className='voting-meter-card'>
                        <div className='voting-meter'>

                        </div>
                    </div>
                    HTX
                    <div>
                        600
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConcertVoting
