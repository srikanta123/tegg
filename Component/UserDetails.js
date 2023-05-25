import React, { useEffect } from 'react'
import FormikAndYup from './FormikAndYup';

 function UserDetails(props) {

    useEffect(()=>{

        console.log("props",props.getData());

    },[])
    
  return (
    <>
       <div>
      <h1>UserDetails Component</h1>
      <h4>When you click submit button of UserRegistrationPge, data will be get from parent component to child component </h4>
      {props.issbumit? <div>FirstName:{props.getData().firstName}</div>:""}
      {props.issbumit? <div>LastName:{props.getData().lastName}</div>:""}
      {props.issbumit? <div>Email:{props.getData().email}</div>:""}
      {props.issbumit? <div>Password:{props.getData().password}</div>:""}
    
      </div>
      <FormikAndYup />
    </>
 
  )
}
export default UserDetails 
