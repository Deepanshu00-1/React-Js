// import UserInfo from './UserInfo.jsx'
import "./index.css"
import './App.css'
// import DataCollection from "./DataCollect.jsx"
import {useState} from "react";
import "./Components/App2"

function App(){
  const [name,setName] = useState("")
  const [jobRole,setJobRole] = useState("")
  const [portfolio,setPortfolio] = useState("")
  const [linkedin,setLinkedin] = useState("")
  const [github,setGithub] = useState("")
  const [address,setAddress] = useState("")
  const [phone,setPhone] = useState("")
  const [email,setEmail] = useState("")

  const [nameValue,setNameValue] = useState("")
  const [jobRoleValue,setJobRoleValue] = useState("")
  const [portfolioValue,setPortfolioValue] = useState("")
  const [linkedinValue,setLinkedinValue] = useState("")
  const [githubValue,setGithubValue] = useState("")
  const [addressValue,setAddressValue] = useState("")
  const [phoneValue,setPhoneValue] = useState("")
  const [emailValue,setEmailValue] = useState("")

  const onSubmit =()=>{
    setNameValue(name);
    setJobRoleValue(jobRole);
    setPortfolioValue(portfolio);
    setLinkedinValue(linkedin);
    setGithubValue(github);
    setAddressValue(address);
    setPhoneValue(phone);
    setEmailValue(email);
  }

  return(
    <>
    <div className="header">
      <div className="name">
        <h2>{nameValue}</h2>
        <h3>{jobRoleValue}</h3>
      </div>
      <div className="social">
        <p className="portfolio">{portfolioValue}</p><div className="verticalLine"></div>
        <p className="linkedin">{linkedinValue}</p><div className="verticalLine"></div>
        <p className="github">{githubValue}</p><br/>
        <div className="Address">
          <p className="phone">+91 {phoneValue}</p>
          <p className="email">{emailValue}</p>
          <p className="address">{addressValue}</p>
        </div>
      </div>
    </div>

    <div className="resumeDetails">
      <h2>Fill these details to get header of your resume</h2>
      <label htmlFor="text">Name</label>
      <input type="text" className='inputName' value={name} onChange={()=> setName(event.target.value)}/><br />

      <label htmlFor="text">JobRole</label>
      <input type="text" className='inputName' value={jobRole} onChange={()=> setJobRole(event.target.value)}/><br />

      <label htmlFor="text">Portfolio link</label>
      <input type="hyperlink" className='inputName' value={portfolio} onChange={()=> setPortfolio(event.target.value)}/><br />

      <label htmlFor="text">Linkedin link</label>
      <input type="hyperlink" className='inputName' value={linkedin} onChange={()=> setLinkedin(event.target.value)}/><br />

      <label htmlFor="text">Github link</label>
      <input type="hyperlink" className='inputName' value={github} onChange={()=> setGithub(event.target.value)}/><br />

      <label htmlFor="text">Phone no.</label>
      <input type="phone" className='inputName' value={phone} onChange={()=> setPhone(event.target.value)}/><br />

      <label htmlFor="text">Email</label>
      <input type="email" className='inputName' value={email} onChange={()=> setEmail(event.target.value)}/><br />

      <label htmlFor="text">Address</label>
      <input type="text" className='inputName' value={address} onChange={()=> setAddress(event.target.value)}/><br />

      <button className='btn' onClick={onSubmit}>Submit</button>
    </div>
    </>
  )
}

export default App

// function App(){
//   const name = document.querySelector('.inputName')

//   return(
//     <>
//     {/* <Student name = "Spongebob" age = {20} isStudent = {true}/>
//     <Student name="Patrick" age = {21} isStudent = {false}/>
//     <Student name="Squidward" age = {23} isStudent = {false}/>
//     <Student name="Sandy" age = {22} isStudent = {true}/>
//     <Student /> */}
//     <UserInfo 
//     // Name = {Names()}
//     />
//     <div className="header">
//       <div className="name">
//         <h2>{props.Name}</h2>
//         <h3>{props.jobRole}</h3>
//       </div>
//       <div className="social">
//         <p className="portfolio">{props.Portfolio}</p><div className="verticalLine"></div>
//         <p className="linkedin">{props.Linkedin}</p><div className="verticalLine"></div>
//         <p className="github">{props.Github}</p><br/>
//       </div>
//       <div className="Address">
//         <p className="phone">Phone: {props.phoneNo}</p>
//         <p className="email">{props.email}</p>
//         <p className="address">{props.address}</p>
//       </div>
//     </div>

//     <div className="resumeDetails">
//       <h2>Fill these details to get header of your resume</h2>
//       <label htmlFor="text">Name</label>
//       <input type="text" className='inputName'/><br />
//       <label htmlFor="text">JobRole</label>
//       <input type="text" /><br />
//       <label htmlFor="text">Portfolio link</label>
//       <input type="hyperlink" /><br />
//       <label htmlFor="text">Linkedin link</label>
//       <input type="hyperlink" /><br />
//       <label htmlFor="text">Github link</label>
//       <input type="hyperlink" /><br />
//       <label htmlFor="text">Phone no.</label>
//       <input type="phone" /><br />
//       <label htmlFor="text">Email</label>
//       <input type="email" /><br />
//       <label htmlFor="text">Address</label>
//       <input type="text" /><br />
//       <button className='btn'>Submit</button>
//     </div>
//     </>
//   )
// }