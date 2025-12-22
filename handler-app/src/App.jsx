import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HandlerCounter from './components/HandlerCounter'
import EarlyReturnExample from './components/EarlyReturnExample'
import TernaryExample from './components/TernaryExample'
import ListLengthExample from './components/ListlengthExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Section>
        <HandlerCounter/>
      </Section>

      <Section>
        <EarlyReturnExample/>
      </Section>

      <Section>
        <TernaryExample/>
      </Section>

      <Section>
        <ListLengthExample/>
      </Section>


    </>
  )
}

function Section({ children }) {
  return (
    <div style={styles.section}>
      {children}
    </div>
  );
}

const styles = {
  section: {
    marginBottom: 32,
    paddingBottom: 24,
    borderBottom: "3px dashed #999999"
  },
};


export default App
