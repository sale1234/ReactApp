import React from 'react'

const Button = ({ color }) => {
  const onClick = () => {
    console.log(1)
  }

  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className='btn'
    >
      Add
    </button>
  )
}

export default Button
