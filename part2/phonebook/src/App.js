import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')

  const addContact = (event) => {
    event.preventDefault();
    //check name
    let originalArr = persons
    for (let person of originalArr) {
      if( person.name.toLowerCase().includes(newName.toLowerCase()) ){
        return alert(`${newName} is already added to the phonebook`)
      } 
    }
    //add name
    const personObject = {
        name: newName,
        number: newNumber
    }
    setPersons(persons.concat(personObject));
    setNewName('');
    setNewNumber('');
  }

  const handleChangeName = (event) => { setNewName(event.target.value); }

  const handleChangeNumber = (event) => { setNewNumber(event.target.value); }

  const numbers = () => persons.map(person => <p key={person.name}>{person.name}: {person.number}</p>)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: 
          <input
            value={newName}
            onChange={handleChangeName}
          />
        </div>
        <div>
          number:
          <input 
            value={newNumber}
            onChange={handleChangeNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {numbers()}
    </div>
  )
}

export default App