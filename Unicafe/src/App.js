
import React from "react"
import { useState } from "react";
function App() {
  const [good, setGood] = useState(0)
  const [neautral, setNeautral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [percentage, setPercentage] = useState(100)
  
  const funcGood = () =>{
    setGood(good +1)
    setAll( neautral + good + bad + 1)
    setAverage(all/3)
    setPercentage(((good +neautral)/(good + neautral + bad)*100))
  }

  const funcNeautral = () =>{
    setNeautral(neautral +1)
    setAll( neautral + good + bad + 1)
    setAverage(all/3)
    setPercentage(((good +neautral)/(good + neautral + bad)*100))
  }

  const funcBad = () =>{
    setBad(bad +1)
    setAll(neautral + good + bad + 1)
    setAverage(all/3)
    setPercentage(((good +neautral)/(good + neautral + bad)*100))
  }


  return (
    <div className="App">
      <h2>Give Feedback</h2>

      <Btn 
          funcGood = {funcGood}
          text     = "Good"
      />
      <Btn 
          funcGood = {funcNeautral}
          text     = "Neautral"
      />
      <Btn 
          funcGood = {funcBad}
          text     = "Bad"
      />
      
      <Statistics
        good ={good}
        neautral ={neautral}
        bad ={bad}
        all = {all}
        average ={average}
        percentage ={percentage}
      />
    </div>
  );
}
const Btn = (props) =>{
  return(
    <>
      <button onClick={props.funcGood}>{props.text}</button>
    </>
  )
}
const Statistics = ({good, neautral, bad, average, percentage, all}) =>{
       
  return(
    <>
        <h2>Statistics</h2>
        {bad || good || neautral ?
        <div>
         <StatisticLine
            text = "good"
            value = {good}
         />
          <StatisticLine
            text = "Neautral"
            value = {neautral}
         />
          <StatisticLine
            text = "Bad"
            value = {bad}
         />
         <StatisticLine
         text ="All"
         value={all}
         />
         <StatisticLine
         text ="Average"
         value={average}
         />
         <StatisticLine
         text ="Positive %"
         value={percentage}
         />
        
        </div>:<p>No Feedback Given</p>
      }
    </>
  )
}


const StatisticLine = ({good, neautral, bad, all, average, percentage, text, value}) =>{
  return(
    <>
      <table >
        <tbody>
        <tr><td>{text}</td><td>{value}</td></tr>
        </tbody>
        
      </table>
      <p> </p>
    </>
  )
}
export default App;
