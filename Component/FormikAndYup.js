import React from 'react'
import {useFormik} from 'formik'
import { signUpSchema } from '../Schema'

 const FormikAndYup=()=> {
    const initialValues={
        firstname:"",
        lastname:"",
        email:"",
        password:""
    }
   const {values,errors,touched,handleBlur,handleChange,handleSubmit}= useFormik({
        initialValues:initialValues,
        validationSchema:signUpSchema,
        validateOnChange: true,
        onSubmit:(values, action)=>{
            console.log(
              "values",
                values
              );
              action.resetForm();
            
        }
    })
    // console.log("onsubmit");
  return (
    <>
       <div>
      <h1>FormikAndYup Validation</h1>
      <form onSubmit={handleSubmit}>

        <div className='input-block'>
<label htmlFor="firstname"className='input-lable'>FirstName</label>
<input 
type='firstname'
autoComplete='off'
name="firstname"
id="firstName"
placeholder="firstName"
value={values.firstname}
onChange={handleChange}
onBlur={handleBlur}

/>
{errors.firstname && touched.firstname?<p  style={{color:"red"}}className='form-error'>{errors.firstname}</p>:""}

        </div>

        <div className='input-block'>
<label htmlFor="lastname"className='input-lable'>LastName</label>
<input 
type='lastname'
autoComplete='off'
name="lastname"
id="lastname"
placeholder="lastname"
value={values.lastname}
onChange={handleChange}
onBlur={handleBlur}

/>
{errors.lastname && touched.lastname?<p  style={{color:"red"}}className='form-error'>{errors.lastname}</p>:""}

        </div>
        <div className='input-block'>
<label htmlFor="email"className='input-lable'>Email</label>
<input 
type='email'
autoComplete='off'
name="email"
id="email"
placeholder="email"
value={values.email}
onChange={handleChange}
onBlur={handleBlur}

/>
{errors.email && touched.email?<p  style={{color:"red"}}className='form-error'>{errors.email}</p>:""}


        </div>
        <div className='input-block'>
<label htmlFor="password"className='input-lable'>Password</label>
<input 
type='password'
autoComplete='off'
name="password"
id="password"
placeholder="password"
value={values.password}
onChange={handleChange}
onBlur={handleBlur}

/>
{errors.password && touched.password?<p  style={{color:"red"}} className='form-error'>{errors.password}</p>:""}

        </div>
        <div>

            <button className='input-button' type='submit'>Submit</button>
        </div>
      </form>
      </div>
    </>
 
  )
}
export default FormikAndYup;