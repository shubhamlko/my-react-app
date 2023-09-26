import React from 'react'
import Person from './Person'

function Namelist() {

    const persons = [
        {
            id: 1,
            name: "Bruce",
            age: 35
        },
        {
            id: 1,
            name: "Steve Rogers",
            age: 70
        },
        {
            id: 1,
            name: "Tony",
            age: 32
        },
        {
            id: 1,
            name: "Hawkeye",
            age: 28
        },

    ]
    const personList = persons.map(person => <Person person={person} />)
    return (
        <div>{personList}</div>
    )
}

export default Namelist