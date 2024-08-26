import React from 'react'
import './ExploreMenu.css'
import { Menu_list } from '../../assets/assests'
function ExploreMenu({category,setcategory}) {
  return (
    <div className='explore-menu' id='explore-menu'>
    <h1>Explore our menu</h1>
    <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos ullam quam eius sit, optio a aliquid et. Nam eaque dolorum quaerat culpa tempora a perferendis excepturi voluptatum quod consequatur.</p>
   <div className="explore-menu-list">
    {Menu_list.map((item,index)=>(
        <div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
<img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
<p>{item.menu_name}</p>
        </div>
    ))}
   </div>
   <hr />

    </div>
    
  )
}

export default ExploreMenu
