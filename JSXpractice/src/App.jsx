import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Create a react app from scratch
// It should display 2 paragraphs HTML elements.
// The paragraph should say 
// Created by "your name"
// Copyright CURRENT YEAR.


function App() {
  const name = '';
  const currentYear = new Date().getFullYear();
  const customStyle = {
    color: 'red',
    fontSize: '10vh',
  }
  const date = (new Date).getTime();
  console.log(date)
  return(
    <>
    <p className='' spellcheck="false" contenteditable = "true" style={customStyle}>Created by {name}</p>
    <p>CURRENT YEAR {currentYear}</p>
    <img src="" alt="" />
    <img src="" alt="" />
    <img src="" alt="" />
    <h1>{date}</h1>
    </>
  )
}

export default App
