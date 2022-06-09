import React from 'react'

export const Total = ({course}) => {
    const [part1, part2, part3] = course.content
  return (
    <div>        
        <p>Number of exercises: {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )
}
