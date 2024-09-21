import React, { useContext, useState } from 'react'
import './Navbar.css'
import { FaSearch } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../Context/StoreContext';
// import { ImProfile } from "react-icons/im";
import { IoMdLogOut } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
function NavBar({setshowLogin}) {
    const [menu,setmenu]=useState('home')

    const {getTotalCartAmount,token,setToken}=useContext(StoreContext)
    const navigate = useNavigate()
    const logout = ()=>{
   localStorage.removeItem("token");
   setToken("")
 navigate("/")
    }
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
{!token?<button onClick={()=>setshowLogin(true)}>sign in</button>
: <div className='navbar-profile'>
  <img className='icon' src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-profile-glyph-black-icon-png-image_691589.jpg" alt="" />
  <ul className='nav-profile-dropdown'>
    <li onClick={()=>navigate('/myorders')}><FaShoppingBag/><p>Order</p></li>
    <hr />
    <li onClick={logout}><IoMdLogOut/><p>Logout</p></li>
  </ul>
</div> }
        </div>
    </div>
  )
}

export default NavBar
