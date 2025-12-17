import { useState } from 'react'
import './App.css'

// 컴포넌트들 import
import BadCounter from './components/BadCounter'
import CounterBugExample from './components/CounterBugExample'
import CounterFunctional from './components/CounterFunctional'
import Immutability from './components/Immutability'
import CounterExam from './components/CounterExam'
import DarkModeToggle from './components/DarkModeToggle'

function App() {
  // App 컴포넌트 자체 state (지금은 사용 안 함)
  const [count, setCount] = useState(0)

  return (
    <>
      <BadCounter />
      <hr/>
      <CounterBugExample />
      <hr/>
      <CounterFunctional />
      <hr/>
      <Immutability/>
      <hr/>
      <CounterExam/>
      <hr/>
      <DarkModeToggle/>
    </>
  )
}

export default App