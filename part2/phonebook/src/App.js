import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Service from './services/Service'

const App = () => {
  const [ persons, setPersons] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber] = useState('');
  const [ newFilter, setFilter] = useState('');

  useEffect(() => {
    Service
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    //check name
    let originalArr = persons
    let match = false
    let updateId = 0;
    for(let person of originalArr) {
      if(person.name.toLowerCase().includes(newName.toLowerCase())){
        match = true
        updateId = person.id
        break
      } else {
        match = false
      }
    }
    
    if(match){
      //update or reject
      updateReject(updateId)
    } else {
      //add
      addContact()
    }
  }

  const addContact = () => {
        //add name
    const personObject = {
      name: newName,
      number: newNumber
    }

    Service
      .create(personObject)
      .then(newPersons => {
        setPersons(persons.concat(newPersons));
        setNewName('');
        setNewNumber('');
      })
    
  };

  const updateReject = (id) => {
    const result = window.confirm(`${newName} is already added to the phonebook, replace old number with new one?`)
    if(result){
      const updatePerson = persons.find(n => n.id === id)
      const changedPerson = {...updatePerson, number: newNumber}
      Service
         .update(id, changedPerson)
         .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
         })
    } else {
      return
    }
  }

  const handleChangeName = (event) => { setNewName(event.target.value) };
  const handleChangeNumber = (event) => { setNewNumber(event.target.value) };
  const search = (event) => { setFilter(event.target.value.toLowerCase()) };
  const searchresults = persons.filter(person => person.name.toLowerCase().includes(newFilter));
  
  const deletePerson = (event) => {
    const deletedPerson = event.target.previousSibling.textContent.split(':')[0]
    const result = window.confirm(`Delete ${deletedPerson}?`)
    if(result) {
      const deleteId = parseInt(event.target.id)
      Service.remove(deleteId)
      const newList = persons.filter(person => person.id !== deleteId)
      setPersons(newList)
    } else {
      return
    }
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        filter={newFilter} 
        change={search}
      />

      <h3>Add a new</h3>
      <PersonForm 
        submit={handleSubmit} 
        name={newName} 
        number={newNumber} 
        changeName={handleChangeName} 
        changeNumber={handleChangeNumber}
      />
      
      <h3>Numbers</h3>
      <Persons 
        search={searchresults} 
        remove={deletePerson}
      />
    </div>
  );
};

export default App