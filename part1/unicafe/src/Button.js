import React from 'react'

export const Button = ({name, handleClick, text}) => {
  return (
    <>
        <button name={name} handleClick={handleClick}>{text}</button>
    </>
  )
}
