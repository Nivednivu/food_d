import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../components/Context/StoreContext'
import { ToastContainer } from 'react-toastify'
function PlaceOrder() {
   
  const {getTotalCartAmount}=useContext(StoreContext)
  const handleclick =()=>{
    
    alert('Order Successful')
  }
  return (

    <>
   <form className='place-order'>
    <div className='place-order-left'>
      <p className='title'>Delivery Information</p>
      <div className="multi-fields">
        <input type="text" placeholder='First name'/>
        <input type="text" placeholder='Last Name'/>
      </div>
      <input type="text" placeholder='Email address' />
      <input type="text" placeholder='Street' />
      <div className="multi-fields">
        <input type="text" placeholder='City' />
        <input type="text" placeholder='State' />
      </div>
      <div className="multi-fields">
        <input type="text" placeholder='Zip code' />
        <input type="text" placeholder='Country' />
      </div>
      <input type="text" placeholder='Phone' />
    </div>
    <div className="place-order-right">

    <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-details">
              <p>Sub Total</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
          <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>          <button onClick={handleclick}>PROCEED TO PAYMENT</button>

          </div>


    </div>
    <ToastContainer/>
   </form>
    </>

  )
}

export default PlaceOrder
