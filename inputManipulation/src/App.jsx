// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {useState} from 'react'
import './App.css'

function App() {
    const[name,setName] = useState("");
    const[jobRole,setJobRole] = useState("");

    const[nameValue,setNameValue] = useState("");
    const[jobRoleValue,setJobRoleValue] = useState("");

    const onSubmit=()=>{
        setNameValue(name)
        setJobRoleValue(jobRole)
    }

   return(
    <>
    <div className="name">{nameValue}</div>
    <div className="jobRole">{jobRoleValue}</div>
    <br />
    <br />
    <input type="text" className='nameInput' placeholder='enter name' value= {name} onChange={()=> setName(event.target.value)}/><br />
    <input type="text" className='jobRoleInput' placeholder='enter jobRole' value={jobRole} onChange={()=> setJobRole(event.target.value)}/><br />
    <button onClick = {onSubmit}>Submit</button>
    </>
   )
}

export default App

// const [name, setName] = useState("")
//     const [value, setValue] = useState("")

//     const onSubmit = ()=>{
//         setValue(name);
//     }
//     return(
//         <>
//         <input type="text" placeholder="Enter Name" value={name} onChange={()=> setName(event.target.value)}/>
//         <br /><br />
//         <button onClick={onSubmit}>Submit</button>
//         <div>
//             <p>Name: <span>{value}</span></p>
//         </div>
//         </>
//     )