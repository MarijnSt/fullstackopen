import React from 'react'
import Weather from './Weather'

const Country = ({country}) => {
    const languages = () => {
        const lan = country.languages
        return lan.map(language => <li key={language.name}>{language.name}</li>)
        
    }
    return (
        <div>
            <h2>{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h3>Languages</h3>
            <ul>{languages()}</ul>
            <img src={country.flag} alt="flag"/>
            <Weather country={country}/>
        </div>
    )
}

export default Country