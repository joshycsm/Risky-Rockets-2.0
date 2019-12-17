import React from 'react'
import RocketCard from './RocketCard'

export default function Rockets({ rockets, cardClick }){
    const rocketCards = rockets.map(rocket => {
        if(rocket.links.flickr_images.length > 0){
            return <RocketCard
                rocket={rocket}
                cardClick={cardClick} />
        }
    })
    
    return(
        <div className='rocketsDiv'>
            <h1>Rockets</h1>
            {rocketCards}
        </div>
    )
}