import React from 'react'
import { Header } from './Header'
import { Total } from './Total'
import { Content } from './Content'

    const App = () => {
    const course = {
    name : 'Half Stack application development',
    content: [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using Props to pass data',
            exercises: 7
        },
        {
            name:'State of a component',
            exercises: 14
        }
    ]
    }
  return (
    <div>
        <Header course={course}/>
        <Content
            course= {course}
        />
        <Total
            course={course}
        />
    </div>
  )
}
export default App