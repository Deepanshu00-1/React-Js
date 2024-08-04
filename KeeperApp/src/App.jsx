import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
import Note from "./components/Note"
import Footer from "./components/Footer"

function App(){
  return(
    <>
    <Header />
    <Note />
    <Footer />
    </>
  )
}

export default App
