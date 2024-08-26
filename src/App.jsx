import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navbar/NavBar'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'

function App() {
  const[showLogin,setshowLogin]=useState(false)
  return (
<>
{showLogin?<LoginPopup setshowLogin={setshowLogin}/>:<></>}
      <div className='app'>
      <NavBar setshowLogin={setshowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
      </div>
      <Footer/>

</>
  )
}

export default App
