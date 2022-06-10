import { useState } from 'react'
import { Filter } from './Filter'
import { Person } from './Person'
import { PersonForm } from './PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '1234151' }
  ]) 

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    const isIn = persons.every( ({name}) => name !== newName)
    isIn ? newName.length > 0 && setPersons([...persons, {name: newName, phone: newPhone}]) : window.alert(`${newName} is already used`)
    setNewName('')
    setNewPhone('')
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }
  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value) 
  }
  const handleFilter = (e) =>{
    setFilter(e.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
        <Filter filter={filter} handleFilter={handleFilter} setFilter={setFilter}/>
      
      <h2>Add new</h2>
      <PersonForm
       handleSubmit={handleSubmit} 
       handleNameChange={handleNameChange} 
       newName={newName} 
       newPhone={newPhone} 
       handlePhoneChange={handlePhoneChange}/>

      <h2>Numbers</h2>
      {
        persons.filter(({name}) => {
          return name.length > 0 ? name.toLowerCase().includes(filter) : persons
        }).map(({name, phone}) => {
          return (
            <Person name={name} key={name} phone={phone}/>
          )
        })
      }
    </div>
  )
}

export default App