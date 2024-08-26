import React, { useContext, useState } from 'react'
import './Navbar.css'
import { FaSearch } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { StoreContext } from '../Context/StoreContext';
function NavBar({setshowLogin}) {
    const [menu,setmenu]=useState('home')
    const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <div className='navbar'>
        <Link to={'/'}>        <h1 className='tomoto'>Tomoto</h1>
        </Link>
        <ul className="navbar-menu">
            <Link to={'/'} > <li onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>Home</li> </Link>
            <a href='#explore-menu' ><li onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>menu</li> </a>
            <a href='#app-dowwnload' onClick={()=>setmenu("mobile-app")} className={menu==="mobile-app"?"active":""}> <li>Mobile-app</li></a>
            <a href='#footer' onClick={()=>setmenu("contact-us")} className={menu==="contact-us"?"active":""}> <li>contact us</li> </a>
        </ul>
        <div className='navbar-right'> 
<p ><FaSearch className='logo fa-2'/></p>
<div className='navbar-search-icon'>
  <Link to='/cart'><h3><FaBasketShopping className='faba'/></h3>  </Link>
<div className={getTotalCartAmount()===0?"":"dot"}></div>
</div>
<button onClick={()=>setshowLogin(true)}>sign in</button>
        </div>
    </div>
  )
}

export default NavBar
