import React from 'react'

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
        </div>
    )
}

export default Country