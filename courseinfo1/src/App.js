
import React from "react"
function App() {
  const Course = {
    name: 'Half Stack application development',
    parts:[
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  


  return (
    <div className="App">
      
      <Header
        Course = {Course.name}
      />
      <Content
        name = {Course.parts[0].name}
        exercises= {Course.parts[0].exercises}
      />
      <Content
        name = {Course.parts[1].name}
        exercises= {Course.parts[1].exercises}
      />
      <Content
        name = {Course.parts[2].name}
        exercises= {Course.parts[2].exercises}
      />
      <Footer Total = {Course.parts[2].exercises + Course.parts[1].exercises + Course.parts[0].exercises}/>
    </div>
  );
}

function Header(props) {
  return(
    <>
        <h4>Course:{props.Course}</h4>
    </>
  )
}

function Content(props) {
  const {name, exercises} = props
  return(
    <>
      <p>part {props.name} exercises:{props.exercises}</p>
      
    </>
    
  )
}

const Part = (props) =>{
  <>
      <p>{props.name} {props.exercises}</p>
  </>
}

function Footer(props) {
  return(
    <>
    <p>Total:{props.Total}</p>
    </>
  )
}
export default App;
