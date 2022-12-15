
import React from "react"
import { useState } from "react";


function App() {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState([0,0,0,0,0,0,0])

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

const RandomAnec =() =>{
  //const RandomAnec =  Math.floor(Math.random()* anecdotes.length)
      setSelected(Math.floor(Math.random()* anecdotes.length))
}

const IncreaseVote = () =>{
    const myVotesCopy = [...vote]
    myVotesCopy[selected] += 1
    setVote(myVotesCopy)
    
}
const maxi = () =>{
  let mx =-1, mxk = -1
  for (let index = 0; index < vote.length; index++) {
      if(vote[index] >mx){
        mxk = index
        mx =vote[index]
      }
    }
    return mxk
}
  return(

    <>
        <p>{anecdotes[selected]}</p>
        <p>has {vote[selected]}  votes</p>
        <button onClick={IncreaseVote} >Vote</button>
        <button onClick={RandomAnec}>Next Anecdote</button>
        <h3>Anecdote with the highest votes</h3>
        <p>{anecdotes[maxi()]}</p>
    </>
  )
  }
export default App;
