import React from 'react'
import {
  Link
} from "react-router-dom";

const Register = (props) => {

    return (
        <div className=" mt-20 ">
            <h1 className="text-center font-bold text-3xl">Register For Event</h1>
            <form className="mx-auto max-w-lg">
            <div className="flex flex-col mb-4 mt-20">
    <label className="mb-2 font-medium text-lg text-grey-darkest" htmlFor="conpassword">Name</label>
    <input className="border py-1 px-2 text-grey-darkest focus:outline-none focus:ring-2 
    focus:ring-purple-800 rounded"  type="text" name="repassword" id="conpassword"
    
/>
    
  </div>
  <div className="flex flex-col mb-4">
    <label className="mb-2 font-medium text-lg text-grey-darkest" htmlFor="conpassword">Email</label>
    <input className="border py-1 px-2 text-grey-darkest focus:outline-none focus:ring-2 
    focus:ring-purple-800 rounded"  type="email"
    />
    <div className="flex flex-col mb-4">
    <label className="mb-2 font-medium text-lg text-grey-darkest" htmlFor="conpassword">Contact Number</label>
    <input className="border py-1 px-2 text-grey-darkest focus:outline-none focus:ring-2 
    focus:ring-purple-800 rounded"  type="text" name="repassword" id="conpassword"
    
/>

 <a className="text-2xl text-center mt-24 " href="https://rzp.io/l/tlRFE4c9"><span
  className="bg-purple-600 text-white px-3 py-2 rounded">Pay For Event</span></a>
    
  </div>
    
  </div>
            </form>
        </div>
        )    
        

}

export default Register
