import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginButton from './components/LoginButton/LoginButton'
import DeleteButton from './components/DeleteButton/DeleteButton'
import Box from "./components/Box/Box";

function App() {
  

  return (
    <>
      <LoginButton />
      <DeleteButton />
      
      <div style={{ padding: 20 }}>
      <Box />
      <Box highlight />
      <Box fullWidth />
      <Box highlight fullWidth />
      
    </div>

    </>
  )
}

export default App


