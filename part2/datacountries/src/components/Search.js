import React from 'react'

const Search = ({filter, change}) => {
    return (
        <div>
            <p>Find countries</p>
            <input 
                type="text" 
                value={filter}
                onChange={change}
            />
        </div>
    )
}

export default Search