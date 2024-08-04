// import { useState } from 'react'
import './App.css'
import pi, {doublePi,triplePi} from './MathValues'
import * as calculation from "./Calculator"
// import * as pi from "./MathValues"
// Create a react app from scratch
// It should display 2 paragraphs HTML elements.
// The paragraph should say 
// Created by "your name"
// Copyright CURRENT YEAR.



function App() {
  // const name = '';
  // const currentYear = new Date().getFullYear();
  // const customStyle = {
  //   color: 'red',
  //   fontSize: '10vh',
  // }
  // const StyleForDiv = {
  //   width: '100%',
  //   height: '50vh',
  //   backgroundColor: 'crimson',
  // }

  

  // const date = new Date(2024, 1, 1, 119);
  // const currentTime = date.getHours();
  // // console.log(currentTime)
  // let greeting;

  // const customStyle = {
  //   color: ""
  // }

  // if(currentTime < 12){
  //   greeting = 'Good Morning';
  //   customStyle.color = 'red';
  // }else if(currentTime < 18){
  //   greeting = 'Good Afternoon';
  //   customStyle.color = 'green';
  // }else{
  //   greeting = 'Good Night';
  //   customStyle.color = 'blue';
  // }
  // console.log(pi)
 
  return(
    <>
    {/* <h1>{message}</h1> */}
    {/* <p className='' spellcheck="false" contenteditable = "true" style={customStyle}>Created by {name}</p>
    <p>CURRENT YEAR {currentYear}</p>
    <img src="" alt="" />
    <img src="" alt="" />
    <img src="" alt="" />
    <h1>{date}</h1>
    <div style= {StyleForDiv}></div> */}
    {/* <h1 className='heading' style={customStyle} >{greeting }</h1>
    <ul>
      <li>{pi}</li>
      <li>{doublePi()}</li>
      <li>{triplePi()}</li>
    </ul> */}

    <ul>
      <li>{calculation.add(2,3)}</li>
      <li>{calculation.multiply(2,3)}</li>
      <li>{calculation.subtract(2,3)}</li>
      <li>{calculation.divide(2,3)}</li>
    </ul>
    </>
  )
}

export default App
