import React from 'react'

export const Content = ({course}) => {
    const [part1, part2, part3] = course.content
  return (
    <div>
        <p> {part1.name} {part1.exercises}</p>
        <p> {part2.name} {part2.exercises}</p>
        <p> {part3.name} {part3.exercises}</p>
    </div>
  )
}
