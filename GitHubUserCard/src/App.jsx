import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GitHubUserCard from './components/GithubUserCard'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GitHubUserCard/>
    </>
  )
}

export default App
