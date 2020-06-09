import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => {
    return (
        <button onClick={handleClick}>{text}</button>
    );
}

const Statistics = ({good, neutral, bad, all}) => {
  return (
    <div>
      <h1>Statistics</h1>
      <ul>
        <li>good {good}</li>
        <li>neutral {neutral}</li>
        <li>bad {bad}</li>
        <li>all {all}</li>
        <li>average {(1*good + 0*neutral - 1*bad)/all}</li>
        <li>percentage {good/all * 100}%</li>
      </ul>
    </div>
  );
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  return (
  <div>
    <h1>give feedback</h1>
    <Button handleClick={() => setGood(good + 1)} text="good"/>
    <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
    <Button handleClick={() => setBad(bad + 1)} text="bad"/>  
    <Statistics good={good} neutral={neutral} bad={bad} all={all}/>      
  </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)