import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
// import { food_list } from '../../assets/assests'

export const StoreContext = createContext(null)
const StoreContextProvider = (props)=>{

    const [cartItem,setcartItem]=useState({})
    const url = "https://serverfood-1.onrender.com"
    const [token,setToken] = useState("")
    const [food_list,setFoodList]=useState([])

    const adddToCart = async (itemId)=>{
       if(!cartItem[itemId]){
        setcartItem((prev)=>({...prev,[itemId]:1}))
       }
       else{
        setcartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
       }
       if(token){
         await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
       }
    }
    

    const removeFromCart = async (itemId)=>{
       setcartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
       if(token){
         await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
       }
    }

    // useEffect(()=>{
    //     console.log(cartItem);
        
    // },[cartItem])

    const fetchFoodList = async () =>{
        const response = await axios.get(url+"/api/food/list")
        setFoodList(response.data.data)
    }

    const loadCartData = async (token) => {
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
        setcartItem(response.data.cartData)
    }

    useEffect(()=>{

        async function loadData(){
            await fetchFoodList()
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"))
           }
    
        }
        loadData();
    },[])

    const getTotalCartAmount = ()=>{
        let totalAmount =0
        for(const item in cartItem){
            if(cartItem[item]>0){
                let itemInfo = food_list.find((product)=>product._id===item)
                totalAmount += itemInfo.price*cartItem[item]
    
            }
        }
        return totalAmount
    }

    const contextValue={
   food_list,
   cartItem,
   setcartItem,
   adddToCart,
   removeFromCart,
   getTotalCartAmount,
   url,
   token,
   setToken
  
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider> 
    )
}

export default StoreContextProvider
// function StoreContext() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default StoreContext
