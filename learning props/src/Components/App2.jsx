// import {useState} from 'react';

// function App2(){
//     const [address,setAddress] = useState("")
//     const [phone,setPhone] = useState("")
//     const [email,setEmail] = useState("")

//     const [addressValue,setAddressValue] = useState("")
//     const [phoneValue,setPhoneValue] = useState("")
//     const [emailValue,setEmailValue] = useState("")

//     const onSubmit =()=>{
//         // setNameValue(name);
//         // setJobRoleValue(jobRole);
//         // setPortfolioValue(portfolio);
//         // setLinkedinValue(linkedin);
//         // setGithubValue(github);
//         setAddressValue(address);
//         setPhoneValue(phone);
//         setEmailValue(email);
//       }

//     return(
//         <>
//         <div className="Address">
//           <p className="phone">+91 {phoneValue}</p>
//           <p className="email">{emailValue}</p>
//           <p className="address">{addressValue}</p>
//         </div>
//         <label htmlFor="text">Phone no.</label>
//         <input type="phone" className='inputName' value={phone} onChange={()=> setPhone(event.target.value)}/><br />

//         <label htmlFor="text">Email</label>
//         <input type="email" className='inputName' value={email} onChange={()=> setEmail(event.target.value)}/><br />

//         <label htmlFor="text">Address</label>
//         <input type="text" className='inputName' value={address} onChange={()=> setAddress(event.target.value)}/><br />

//         <button className='btn' onClick={onSubmit}>Submit</button>
//         </>

//     )
// }
// export default App2