import React from 'react'

const Persons = ({search}) => {
    const numbers = () => search.map(person => 
        <p key={person.name}>{person.name}: {person.number}</p>
    )

    return (
        numbers()
    )
}

export default Persons 