import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TwoInputs from '../components/TwoInputs'
import GreetingForm from '../components/GreetingForm'
import RenderDebugger from '../components/RenderDebugger'
import MountEffect from '../components/MountEffect'
import KeywordWatcher from '../components/KeywordWatcher'
import Timer from '../components/Timer'

function App() {
  const [count, setCount] = useState(0)
  const [showTimer, setShowTimer] = useState(false);
  const [timerKey, setTimerKey] = useState(0);

  return (
    <>
      {/* <TwoInputs/>
      <GreetingForm/>
      <RenderDebugger/>
      <MountEffect/>
      <KeywordWatcher/>
      <Timer/> */}

       <button
        onClick={() => {
          if (!showTimer) {
            setShowTimer(true);
          } else {
            setTimerKey((prev) => prev + 1);
          }
        }}
      >
        {showTimer ? "타이머 다시 생성" : "타이머 보이기"}
      </button>

      {showTimer && <Timer key={timerKey} />}

    </>
  )
}

export default App

//버튼을 하나 만든다.
//버튼을 누르면 "타이머 보이기" / "타이머 다시 생성"


//타이머 띄우기