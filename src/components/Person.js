import React from 'react'

function Person({person , keys}) {
  return (
    <div>
        <h5>
      {keys}  i am {person.name} and i am {person.age} old
        </h5>
    </div>
  )
}

export default Person