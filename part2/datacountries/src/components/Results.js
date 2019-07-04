import React from 'react'
import Country from './Country'

const Results = ({filter, list}) => {
    const results = list.filter(country => country.name.toLowerCase().includes(filter));

    const result = () => {
        if(results.length > 10) {
            return <p>Too many matches, specify another filter</p>
        } else if (results.length === 1) {
            return <Country country={results}/>
        } else {
            return results.map(res => <p key={res.name}>{res.name}</p>)
        }
    }

    return (
        result()
    )
}

export default Results