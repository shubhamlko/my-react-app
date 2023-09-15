import React from 'react'


const Functionbased = () => {
    // return(
    //     <>
    //              <h1>  this is ecample of function based component </h1>  
    //             t 

    //     </>
    // )

    //  using react create element
    return React.createElement(
        'div',
        {id : "demo" , className : "dummyClass"},
        React.createElement('h1', null, "This is example of create element")
    )
}

export default Functionbased