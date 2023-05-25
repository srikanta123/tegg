import React, { useState } from 'react'
import UserDetails from './UserDetails';

function UserRegistrationPage() {
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[show,setShow]=useState(false);
    const[showlastName,setShowLastName]=useState(false);
    const[showemail,setShowEmail]=useState(false);
    const[showpassword,setShowPassword]=useState(false);
    const[issubmit,setIssubmit]=useState(false);

    const handleSubmit =(e)=>{
    e.preventDefault();
    setIssubmit(true);
   
    console.log(firstName +""+lastName +""+ email +""+ password)
    console.log(e.target.value);
   
    }
    const validateFirstName =()=>{
        console.log("validateFirstName")
        setShow(true)
      
    }
    const validateLastName =()=>{
        console.log("validateLastName")
        setShowLastName(true)
    }
    const validateEmail =()=>{
        console.log("validateEmail")
        setShowEmail(true)
    }
  
    const validatePassword =()=>{
        console.log("validatePassword")
        setShowPassword(true)
    }
    const getData = () => {
      return {
        firstName,
        lastName,
        email,
        password
      };
    };
  return (
    <>
    <div>
      <h1>UserRegistrationPage With Validation</h1>
      <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input onBlur={validateFirstName}type="test"  value={firstName}onChange={(e)=>setFirstName(e.target.value)}/>
       {show && firstName===""?  <p style={{color:"red"}}className='color'>Please Enter Your Name</p>:""}
      </div>
      <div>
        <label>Last Name</label>
        <input  onBlur={validateLastName}type="test" value={lastName}onChange={(e)=>setLastName(e.target.value)}/>
        {showlastName && lastName ===""? <p style={{color:"red"}} className='color'>Please Enter Your LastName</p>:""}
      </div>
      <div>
        <label>Email</label>
        <input  onBlur={validateEmail}type="test" value={email}onChange={(e)=>setEmail(e.target.value)} />
        {showemail && email === ""? <p style={{color:"red"}}className='color'>Please Enter Your Email</p>:""}
      </div>
      <div>
        <label>Password</label>
        <input  onBlur={validatePassword} type="test" value={password}onChange={(e)=>setPassword(e.target.value)}  />
      {showpassword && password === ""?   <p style={{color:"red"}}className='color'>Please Enter Your Email</p>:""}
      </div>
      <div>
        <button type="submit" >Submit </button>
      </div>
      </form>
      </div>
     <UserDetails getData={getData} issbumit={issubmit} />
    </>
  
  )
}

export default UserRegistrationPage