import React from 'react'

const Country = ({country}) => {
    const detail = country[0]
    const languages = () => {
        const lan = detail.languages
        return lan.map(language => <li key={language.name}>{language.name}</li>)
        
    }
    return (
        <div>
            <h2>{detail.name}</h2>
            <p>Capital: {detail.capital}</p>
            <p>Population: {detail.population}</p>
            <h3>Languages</h3>
            <ul>{languages()}</ul>
            <img src={detail.flag} alt="flag"/>
        </div>
    )
}

export default Country