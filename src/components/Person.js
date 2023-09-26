import React from 'react'

function Person({person}) {
  return (
    <div>
        <h2>
        i am {person.name} and i am {person.age} old
        </h2>
    </div>
  )
}

export default Person