import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//default 내보내기를 하고, import 할 때 이름 마음대로 바꿩도 되기니긴
import Welcom from './components/Hello'
import Jxc from './components/Jsx'


function App() {
  return (
    <div>
      <h1>React 함수형 컴포넌트 실습</h1>

      <Welcom /> {/* 컴포넌트의 장점 : 재사용성이 좋다. */}
      <Welcom /> {/*컴포넌트를 내가 원하는 만큼 재호출해서 쓸 수 있다.*/}
      <Jxc />
      
    </div>


  )
}

export default App

