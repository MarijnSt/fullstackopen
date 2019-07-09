import React from 'react'

const Persons = ({search}) => {
    const numbers = () => search.map(person => 
        <p>{person.name}: {person.number}</p>
    )

    return (
        numbers()
    )
}

export default Persons 