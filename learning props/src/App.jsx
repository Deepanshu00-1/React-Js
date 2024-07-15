import UserInfo from './UserInfo.jsx'
import "./index.css"
import './App.css'
import DataCollection from "./DataCollect.jsx"

// function Names(Name){
//   document.querySelector('.btn').addEventListener('click',function(Name){
//     inputName.value == Name;
//   })
// }

function App(){
  // const name = document.querySelector('.inputName')

  return(
    <>
    {/* <Student name = "Spongebob" age = {20} isStudent = {true}/>
    <Student name="Patrick" age = {21} isStudent = {false}/>
    <Student name="Squidward" age = {23} isStudent = {false}/>
    <Student name="Sandy" age = {22} isStudent = {true}/>
    <Student /> */}
    <UserInfo 
    // Name = {Names()}
    />
    <div className="resumeDetails">
      <h2>Fill these details to get header of your resume</h2>
      <label htmlFor="text">Name</label>
      <input type="text" className='inputName'/><br />
      <label htmlFor="text">JobRole</label>
      <input type="text" /><br />
      <label htmlFor="text">Portfolio link</label>
      <input type="hyperlink" /><br />
      <label htmlFor="text">Linkedin link</label>
      <input type="hyperlink" /><br />
      <label htmlFor="text">Github link</label>
      <input type="hyperlink" /><br />
      <label htmlFor="text">Phone no.</label>
      <input type="phone" /><br />
      <label htmlFor="text">Email</label>
      <input type="email" /><br />
      <label htmlFor="text">Address</label>
      <input type="text" /><br />
      <button className='btn'>Submit</button>
    </div>
    </>
  )
}

export default App
