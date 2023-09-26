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
            id: 2,
            name: "Steve Rogers",
            age: 70
        },
        {
            id: 3,
            name: "Tony",
            age: 32
        },
        {
            id: 4,
            name: "Hawkeye",
            age: 28
        },

    ]
//example for index as key 
const Namesarry = ["a" , "b" , "c", "d"]


    //const personList = persons.map(person => <Person keys={person.id} person={person} />)
    // index as key example
        // const exNamesList = Namesarry.map(name => <h4 key={name}>{name}</h4> )      //problem accurs when any name duplicate
        const exNamesList = Namesarry.map((name , index )=> <h4 key={index}>{name}</h4> )  
    return (
        <>
        {/* <div>{personList}</div> */}
        

        <div className='text-center'>{exNamesList}</div>
        </>
    )
}

export default Namelist