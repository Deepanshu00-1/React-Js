// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import UserGreeting from './UserGreeting'

// Conditional Rendering  = allows you to control what gets rendered
// in your application based on certain conditions
// (show, hide, or change components)

function App(){

  return(
    <>
    <UserGreeting isLoggedIn = {true} username="BroCode"/>
    </>
  )
}

export default App
