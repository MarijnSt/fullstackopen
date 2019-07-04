import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Search from './components/Search'
import Results from './components/Results'

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleChange= (e) => { 
    setNewFilter(e.target.value.toLowerCase())
  }

  return (
    <div>
      <Search filter={newFilter} change={handleChange}/>
      <Results filter={newFilter} list={countries}/>
    </div>
  )
}

export default App;
