import React from 'react'

export const Total = ({course}) => {
  return (
    <div>        
        <p>Number of exercises: {course.parts.reduce((a, b) => a + b.exercises, 0)}</p>
    </div>
  )
}
