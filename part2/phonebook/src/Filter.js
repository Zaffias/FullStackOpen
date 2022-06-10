import React from 'react'

export const Filter = ({filter, handleFilter, setFilter}) => {
  return (
	<div>
        search: <input 
          type="text"
          value={filter}
          onChange={handleFilter}
          />
          <button onClick={()=> setFilter('')}>reset</button>
        </div>
  )
}
