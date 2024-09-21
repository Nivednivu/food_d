import React, { useContext } from 'react'
import './FoodItem.css'
import { IoMdAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import { StoreContext } from '../Context/StoreContext';
const FoodItem = ({id,name,price,description,image})=> {
  const {cartItem,adddToCart,removeFromCart,url} = useContext(StoreContext)
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={url+"/images/"+image} alt="" />
        {
          !cartItem[id]
          ?<IoMdAdd className='add' onClick={()=>adddToCart(id)}/>: <div className='food-item-counter'>
               <IoIosRemove onClick={()=>removeFromCart(id)}/>
               <p>{cartItem[id]}</p>
               <IoMdAdd onClick={()=>adddToCart(id)}/>
                         </div>
        }
      </div>
      <div className="food-item-info">
        <div className='food-item-name-rating'>
       <p>{name}</p>
        {/* <img src="" alt="" /> */}
        </div>
        <p  className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>

      </div>
    </div>
  )
}

export default FoodItem
