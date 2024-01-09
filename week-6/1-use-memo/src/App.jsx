import { useState } from 'react'
import './App.css'
import { Assignment1 } from './components/Assignment1'
import { Assignment2 } from './components/Assignment2'
import Assignment3 from './components/Assignment3'

function App() {
  const [count,setCount]=useState(0);

  function increaseCount(){
    setCount(count+1);
  }


  return (
    <>
      <Assignment1 />
      <button onClick={increaseCount}>Count {count}</button>
      {<Assignment2 /> }
      <Assignment3 />
    </>
  )
}

export default App
