import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Weather = ({country}) => {
    const capital = country.capital
    const call = `http://api.apixu.com/v1/current.json?key=2e8adac3f3094073bf6143356190407&q=${capital}`
    const [weather, setWeather] = useState([])
    const [url, setUrl] = useState('')

    useEffect(() => {
        axios
        .get(call)
        .then(response => {
            setWeather(response.data.current)
            const iconURL=response.data.current.condition.icon.slice(2)
            setUrl(`https://${iconURL}`)
        })
    }, [])

    return (
        <div>
            <h3>Weather in {country.capital}</h3>
            <p>Temperature: {weather.temp_c} °C</p>
            <img src={url} />
            <p>Wind: {weather.wind_kph} kph direction {weather.wind_dir} </p>
        </div>
    )
}

export default Weather