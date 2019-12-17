import React from 'react'
import RocketCard from './RocketCard'

export default function FavoriteRockets({ favorites, cardClick }){
    const favoriteCards = favorites.map(favorite => {
        return <RocketCard
            rocket={favorite}
            cardClick={cardClick} />
    })
    
    return(
        <div className='rocketsDiv'>
            <h1>Favorites</h1>
            {favoriteCards}
        </div>
    )
}