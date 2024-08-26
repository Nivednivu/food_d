import React, { useState } from 'react'
import './LoginPopup.css'

function LoginPopup({setshowLogin}) {
    const [currState,setcurrState]=useState("Login")
  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setshowLogin(false)} src='https://t3.ftcdn.net/jpg/03/64/30/82/360_F_364308273_cV9OrZrqUpZ8En9rC8KxBqaxkVg95ZTY.jpg' alt="" />
        </div>
        <div className='login-popup-input'>
          {currState==="Login"?<></>:           <input type="text"placeholder='Your name'required />
          }
          <input type="email" placeholder='Your Email'required />
          <input type="password"placeholder='Password'required />
        </div>
        <button>{currState==="Sing up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox"required />
          <p>By continuting i agree to the term of use & privacy policy</p>
        </div>
        {currState==="Login"
        ?<p>Create a new account? <span onClick={()=>setcurrState("Sing Up")}>Click here</span></p>
       :<p>Already have an account? <span onClick={()=>setcurrState("Login")}>Login here</span></p>
        }

      </form>
    </div>
    
  )
}

export default LoginPopup
