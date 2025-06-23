import React from 'react'

const ButtonPrime = ({btnTxt}) => {
  return (
    <button id='promBtn'>
        <span>{btnTxt}</span>
        <i className="ri-arrow-right-line"></i>
    </button>
  )
}

export default ButtonPrime