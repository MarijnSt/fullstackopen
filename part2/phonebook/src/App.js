import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addContact = (event) => {
    event.preventDefault();
    const personObject = {
        name: newName
    }
    setPersons(persons.concat(personObject));
    setNewName('');
  }

  const handleChange = (event) => {
    setNewName(event.target.value);
  }

  //object weergeven
  const numbers = () => persons.map(person =>
    <p key={person.name}>{person.name}</p>
    )

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={() => addContact}>
        <div>
          name: 
          <input
            value={newName}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" onClick={addContact}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {numbers()}
    </div>
  )
}

export default App