import React from 'react'
import './SearchNmae.css'

const SearchBarForName = (props) => {
    return (
        <form onSubmit={props.submit} className="namesearch">
            <label htmlFor="name">What? </label>
            <input id="name" type="text" 
            placeholder="Enter Job title"
            onChange={props.change}
            autoFocus
            />
        </form>
    )
}

export default SearchBarForName
