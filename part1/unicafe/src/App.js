import React, {useState} from 'react'
import { Statistics } from './Statistics'

export const App = () => {
    const [good, setGood] = useState(0)
    const [bad, setBad] = useState(0)
    const [neutral, setNeutral] = useState(0)

    const handleClick = ({target}) => {
        if(target.name === 'bad') setBad(bad + 1);
        if(target.name === 'good') setGood(good + 1);
        if(target.name === 'neutral') setNeutral(neutral + 1);
    }
  return (
    <div>
        <h1>Give Feedback</h1>
        <button onClick={handleClick} name='bad'>Bad</button>
        <button onClick={handleClick} name='good'>Good</button>
        <button onClick={handleClick} name='neutral'>Neutral</button>
        <h1>Statistics</h1>
        {good > 0 || bad > 0 || neutral > 0 ? <Statistics good={good} bad={bad} neutral={neutral}/> : <p>no feedback given</p>}
    </div>
  )
}
export default App