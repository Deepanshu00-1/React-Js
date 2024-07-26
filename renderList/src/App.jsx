import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/List.jsx'

function App() {
  const vegetables = [{id:6, name:'potatoes', calories: 110},
    {id:7, name: 'celery', calories: 15},
    {id:8, name: 'carrots', calories: 25},
    {id:9, name: 'corn', calories: 65},
    {id:10, name: 'broccoli', calories: 50};
];
  return(
    <List />
  )
}

export default App
