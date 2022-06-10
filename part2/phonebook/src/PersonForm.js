import React from 'react'

export const PersonForm = ({handleSubmit, newName, handleNameChange,newPhone, handlePhoneChange}) => {
  return (
	<form onSubmit={handleSubmit}>
	<div>
	  name: <input 
		value={newName}
		onChange={handleNameChange}
		required
	  />
	</div>
	<div>
	  number: <input 
	  type="text" 
	  name="phone"
	  value={newPhone}
	  onChange={handlePhoneChange}
	  required
	   />
	</div>
	<div>
	  <button type="submit">add</button>
	</div>
  </form>
  )
}
