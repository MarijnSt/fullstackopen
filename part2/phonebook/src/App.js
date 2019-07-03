import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ newFilter, setFilter] = useState('')

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

  const numbers = () => searchresults.map(person => <p key={person.name}>{person.name}: {person.number}</p>)

  const search = (event) => { setFilter(event.target.value.toLowerCase()) }

  const searchresults = persons.filter(person => person.name.toLowerCase().includes(newFilter))

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        Filter shown with
        <input
          value={newFilter}
          onChange={search}
        />
      </form>
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