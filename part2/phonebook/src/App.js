import { useState, useEffect } from 'react'
import { Filter } from './Filter'
import { Person } from './Person'
import { PersonForm } from './PersonForm'
import personService from './services/persons'
const App = () => {
  
  const [persons, setPersons] = useState([
    {id: 0, name:'', number: 0}
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
    if(persons.some(person => person.name === newName) && window.confirm(`Do you want to replace number of ${newName}`)){
      const [person] = persons.filter(person => person.name === newName)
      const {id} = person
      personService.update(id, {...person, number: newPhone})
        .then(()=>{
          const newState = persons.map((person)=>{
            if(person.id === id){
              return {...person, number: newPhone}
            }
            return person
          })
          setPersons(newState)
        })
        .catch(err => console.log(err))
    }
    else{ 
      personService
      .create({name: newName, number: newPhone, id: persons[persons.length - 1].id + 1})
      .then( response => {
        setPersons([...persons, response.data])
        setNewName('')
        setNewPhone('')
      })
    }
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
    const buttonId = e.target.getAttribute('buttonid')
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