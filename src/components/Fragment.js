import React from 'react'

function Fragment() {
  return (
    //used for no render tag such as like noscript tag ex it will not show on broweser
        <React.Fragment> 
            <div>Fragment</div>
            <div></div>
            <div className='deee'></div>
        </React.Fragment>
  )
}

export default Fragment