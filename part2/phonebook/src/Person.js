import React from 'react'
import { DeleteButton } from './DeleteButton'

export const Person = ({name, phone, id, handleDelete, buttonid}) => {
  return (
	<React.Fragment key={id}>
		<p key={id} buttonid={buttonid}> {name} {phone}</p>
		<DeleteButton handleDelete={handleDelete} buttonid={buttonid} name={name}/>
	</React.Fragment>
  )
}
