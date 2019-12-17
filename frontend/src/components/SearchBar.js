import React from 'react'

export default function SearchBar({ handleChange }){
    return(
        <div>
            <h1>Filter Rockets:</h1>
            <input type='text' onChange={handleChange} />
        </div>
    )
}