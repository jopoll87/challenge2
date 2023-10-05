import React from 'react'

const Button = ({ buttonText, reqType, setReqType}) => {
  return (
    <button
      className={buttonText.toLowerCase() === reqType ? 'selected' : null}
      type='button'
      onClick={() => setReqType(buttonText.toLowerCase())}
    >
      {buttonText}
    </button>
  )
}

export default Button