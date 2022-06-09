import React from 'react'
import { StatisticsLine } from './StatisticsLine'

export const Statistics = ({good, bad, neutral}) => {
  return (
    <div>
        <StatisticsLine value={good} text='good'/>
        <StatisticsLine value={neutral} text='neutral'/>
        <StatisticsLine value={bad} text='bad'/>
        <StatisticsLine value={bad + neutral + good} text='All'/>
        <StatisticsLine value={(bad * -1 + good )/ (bad + good + neutral)} text='Average'/>
        <StatisticsLine value={good / (bad + good + neutral) * 100} text='Positive'/>
    </div>
  )
}
