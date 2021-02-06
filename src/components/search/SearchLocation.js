import React from 'react'
import './SearchLocation.css'

const SearchLocation = (props) => {
    return (
        <form onSubmit={props.submit} className="locationsearch">
        <label htmlFor="location">Where? </label>
        <input onChange={props.change} 
        id="location" type="text" 
        placeholder="Enter Location"/>
    </form>
    )
}

export default SearchLocation
