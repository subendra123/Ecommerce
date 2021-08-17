import React, {useContext} from 'react'

import Items from './items'
import {CartContext} from './Cart';


const ContextCart = () => {
    //const [item, setItem] = useState(Products);

    const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);
    
        if(item.length === 0) {
            return (
                <>
                <header>
        <div className="continue_shopping">
            <h3>Continue Shopping </h3> 
         </div>
         <div className="cart_icon">
             <img src="images/cart.png" alt=""/>
             <p>0</p>
         </div>
        </header>

        <section className="main_cart_section">
            <h1>Shopping Cart</h1>
            <p className="total_items"> You Have <span className="total_item_count">0</span> items in shopping cart </p>
                </section>
                </>
            )
        }

    return (
        <>

<header>
        <div className="continue_shopping">
            <h3>Continue Shopping </h3> 
         </div>
         <div className="cart_icon">
             <img src="images/cart.png" alt=""/>
             <p>{totalItem}</p>
         </div>
        </header>

        <section className="main_cart_section">
            <h1>Shopping Cart</h1>
            <p className="total_items"> You Have <span className="total_item_count">{totalItem}</span> items in shopping cart </p>
            <div className="cart_items">
            <div className="cart_items_container">

              {
               item.map((curItem) => {
                 return <Items key={curItem.id}  {...curItem}/>
               })
              }

             
               
              <div className="checkout">
                <h3>Cart Total: &nbsp; {totalAmount} </h3>
                    <button>Checkout</button>
                    <button onClick= {clearCart}>ClearAll</button>
              </div>
              


               
                </div>
            </div>
        
        </section>
      
            
        </>
    )
}

export default ContextCart
