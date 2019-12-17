import React from 'react'

export default function RocketCard({ rocket, cardClick }){
    const showImage = () => {
        if (rocket.links.flickr_images[0]){
            return <img src={rocket.links.flickr_images[0]} alt={rocket.rocket.rocket_name}/>
        }
    }
    
    return(            
        <div className='rocket-card' onClick={() => cardClick(rocket)}>
            {showImage()}
            <h2>Mission Name: {rocket.mission_name}</h2>
            <h3>Rocket Name: {rocket.rocket.rocket_name}</h3>
            <h3>Flight Number: {rocket.flight_number}</h3>
            <small>Nationality: {rocket.rocket.second_stage.payloads[0].nationality}</small>
            <small>Launch Year: {rocket.launch_year}</small>
            <h3>{rocket.launch_success ? 'Successful' : 'Failed'} mission</h3>
            <a href={rocket.links.video_link}>Launch Video</a>
        </div>
    )
}
