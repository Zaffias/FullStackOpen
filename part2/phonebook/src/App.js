import { useState, useEffect } from 'react'
import { Filter } from './Filter'
import { Person } from './Person'
import { PersonForm } from './PersonForm'
import personService from './services/persons'
const App = () => {
  
  const [persons, setPersons] = useState([
    {id: 0, name:''}
  ]) 
  
  useEffect(() => {
    personService
      .getAll()
      .then((response) =>{
        setPersons(response.data)
      })
  
  }, [])
  
  

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    //const isIn = persons.every( ({name}) => name !== newName)
    personService
      .create({name: newName, number: newPhone, id: persons[persons.length - 1].id + 1})
      .then( response => {
        setPersons([...persons, response.data])
        setNewName('')
        setNewPhone('')
      })
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
  const handleDelete = (e) => {
    const buttonId = parseInt(e.target.getAttribute('buttonid'))
    window.confirm(`Are sure you want to delete ${e.target.name}?`) && personService
      .deleteButton(buttonId)
      .then( () => {
        setPersons(persons.filter((person) => person.id !== buttonId))
      }).catch(() => console.error)
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
          return name?.length > 0 ? name.toLowerCase().includes(filter) : persons
        }).map(({name, number, id}) => {
          return (
            <Person name={name} phone={number} key={id} id={id} handleDelete={handleDelete} buttonid={id}/>
          )
        }) 
      }
    </div>
  )
}

export default App