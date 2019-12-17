import React from 'react'

export default function SearchBar({ handleChange, rockets }){
    const successful = () => {
        const rocketsarray =  rockets.filter(rocket => {
            return rocket.launch_success
        })
        return rocketsarray.length
    }

    const failed = () => {
        const rocketsarray = rockets.filter(rocket => {
            return !rocket.launch_success
        })
        return rocketsarray.length

    }
    
    return(
        <div>
            <h1>Filter Rockets:</h1>
            <input type='text' onChange={handleChange} />
            <h2>Number Successful: {successful()}</h2>
            <h2>Number Failed: {failed()}</h2>
        </div>
    )
}