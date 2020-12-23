import React from 'react'
import FreshTalentImage from '../../components/Label/FreshTalentImage/freshTalentImage'
import LabelImage from '../../components/Label/LabelImage/labelImage'
import LabelPriceGraph from '../../components/Label/LabelPriceGraph/labelPriceGraph'
import LabelTopArtistImage from '../../components/Label/LabelTopArtistImage.scss/labelTopArtistImage'
import RosterScore from '../../components/Label/RosterScore/rosterScore'
import PieChart from '../../components/PieChart/pieChart'
import WorldMap from '../../components/WorldMap/worldMap'

import './labelPage.scss'

const configRoster = {
    headline: 'Roster Score'
}

const LabelPage = () => {
    return (
        <div>
            <section className='label-page'>
                <div>
                    <LabelImage />
                </div>
                <div>
                    <RosterScore {...configRoster}>
                        75.30
                    </RosterScore>
                </div>
                <div>
                    <LabelTopArtistImage />
                </div>
                <div className='data-slideshow'>
                    <div>
                        <LabelPriceGraph />
                    </div>
                    <div>
                        <PieChart /> 
                    </div>
                    <div>
                        <WorldMap />
                    </div>
                </div>
                <div>
                    <FreshTalentImage />
                </div>
            </section>
        </div>
    )
}

export default LabelPage
