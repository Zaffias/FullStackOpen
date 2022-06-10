import React from 'react'
import { Part } from './Part'
import { Total } from './Total'

export const Content = ({course}) => {
    
  return (
    <div>
        {course.parts.map((elem)=>{
          return (<Part exercises={elem.exercises} name={elem.name} key={elem.id} />)
        })}
        <Total course={course}/>
    </div>
  )
}
