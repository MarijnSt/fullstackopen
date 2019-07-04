import React from 'react'
import Country from './Country'

const Results = ({filter, list, klik}) => {
    const results = list.filter(country => country.name.toLowerCase().includes(filter));
    

    const result = () => {
        if(results.length > 10) {
            return <p>Too many matches, specify another filter</p>
        } else if (results.length === 1) {
            return <Country country={results[0]}/>
        } else {
            return results.map(res => {
                return (
                    <div key={res.name}>
                        <p>{res.name}</p>
                        <button onClick={klik}>Show</button>
                    </div>
                )
            })
        }
    }

    return (
        result()
    )
}

export default Results