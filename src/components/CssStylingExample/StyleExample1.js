import React from 'react'
import './Mystyle.css'
function StyleExample1(props) {
    const className = props.primary ? "primary" : ""
  return (
    <div className={`${className} font-xxl` }>Css Example 1</div>
  )
}

export default StyleExample1