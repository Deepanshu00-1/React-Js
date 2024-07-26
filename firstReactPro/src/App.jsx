import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header1 from './Headers/Header1'
import Header2 from './Headers/Header2'

function App() {
  const name = 'Rohan';
  const [input,setInput] = useState('');
  const [value,setValue] = useState('');
  return(
    <>
    {/* <h1>Hello {name}</h1>
    <ul>
      <li>Element1</li>
      <li>Element2</li>
      <li>Element3</li>
    </ul>
    <h2>Enter a number</h2><input type="number" />
    <h3>This is your number:{value}</h3> */}
    <Header1 />
    <Header2 />
    </>
  )
}

export default App
