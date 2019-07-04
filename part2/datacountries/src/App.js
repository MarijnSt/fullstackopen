import React, {useEffect} from 'react';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => console.log(response.data))
  }, [])

  return (
    <div>Elaba</div>
  )
}

export default App;
