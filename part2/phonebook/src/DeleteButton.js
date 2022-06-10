import React from 'react'

export const DeleteButton = ({handleDelete, buttonid, name}) => {
  return (
	<button onClick={handleDelete} buttonid={buttonid} name={name}>Delete</button>
  )
}
