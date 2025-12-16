import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//default 내보내기를 하고, import 할 때 이름 마음대로 바꿩도 되기니긴

import Button from './components/button';

function App() {
  return (
    <>
      {/* {Props 전달하기 HTML의 속성을 지정하듯이 원하는 데이터를 key-value 쌍으로 전달한다.} */}
      <Button text="확인"/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
    </>
  )
}

export default App

