import React from 'react'

export const StatisticsLine = ({text, value}) => {
  return (
        <p>{text} {value} {text === 'Positive' && '%'}</p>
  )
}
