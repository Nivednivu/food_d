import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { StoreContext } from '../Context/StoreContext'
import axios from 'axios'

function LoginPopup({setshowLogin}) {

  
  const {url,setToken} = useContext(StoreContext)

    const [currState,setcurrState]=useState("Login")
    const [data,setData]=useState({
      name:"",
      email:"",
      password:""
    })

    const onChangeHandler = (event) =>{
      const name = event.target.name
      const value = event.target.value
      setData(data=>({...data,[name]:value}))
    }

    const onLogin = async (event) => {
      event.preventDefault()
      let newUrl = url 
      if(currState==="Login"){
        newUrl += "/api/user/login"
      }
      else{
        newUrl += "/api/user/register"
      }

      const response = await axios.post(newUrl,data)

      if(response.data.success){
      setToken(response.data.token)
      localStorage.setItem("token",response.data.token);
      setshowLogin(false)
      }
      else{
        alert(response.data.message)
      }


    }


  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup-container'>
        <div className="login-popup-title">
            <h2>{currState}</h2>
            {/* <input type="text" placeholder='eeeeeeeeeeeee' /> */}
            <img onClick={()=>setshowLogin(false)} src='https://t3.ftcdn.net/jpg/03/64/30/82/360_F_364308273_cV9OrZrqUpZ8En9rC8KxBqaxkVg95ZTY.jpg' alt="" />
        </div>
        <div className='login-popup-input'>
          {currState==="Login"?<></>:     
          <input onChange={onChangeHandler} value={data.name} name='name' type="text"placeholder='Your name' required  />
          }
          <input onChange={onChangeHandler} value={data.email} name='email' type="email" placeholder='Your Email' required />
          <input onChange={onChangeHandler} value={data.password} name='password' type="password"placeholder='Password' required />
        </div>
        <button type='submit'>{currState==="Sing up"?"Create account":"Login"}</button>
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
