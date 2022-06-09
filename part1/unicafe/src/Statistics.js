import React from 'react'
import { StatisticsLine } from './StatisticsLine'

export const Statistics = ({good, bad, neutral}) => {
  return (
    <div>
    <table>
      <tbody>
      <tr>
        <td> <StatisticsLine value={good} text='good'/></td>
      </tr>
      <tr>
        <td> <StatisticsLine value={neutral} text='neutral'/></td>
      </tr>
      <tr>
        <td> <StatisticsLine value={bad} text='bad'/></td>
      </tr>
      <tr>
        <td> <StatisticsLine value={bad + neutral + good} text='All'/></td>
      </tr>
      <tr>
        <td> <StatisticsLine value={((bad * - 1 + good ) / (bad + good + neutral)).toFixed(2)} text='Average'/></td>
      </tr>
      <tr>
        <td> <StatisticsLine value={(good / (bad + good + neutral) * 100).toFixed(2)} text='Positive'/></td>
      </tr>
     </tbody>
    </table>
    </div>
  )
}
