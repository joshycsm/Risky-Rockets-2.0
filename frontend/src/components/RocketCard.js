import React from 'react'

export default function RocketCard({ rocket, cardClick }){
    return(            
        <div className='rocket-card' onClick={() => cardClick(rocket)}>
            <img src={rocket.links.flickr_images[0]} alt={rocket.rocket.rocket_name}/>
            <h2>Rocket Name: {rocket.rocket.rocket_name}</h2>
            <h2>Mission Name: {rocket.mission_name}</h2>
            <p>{rocket.launch_success ? 'Successful' : 'Failed'} mission</p>
            <a href={rocket.link}>Launch Video</a>
        </div>
    )
}