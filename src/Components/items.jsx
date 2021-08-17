import React, {useContext} from 'react'

import {Products} from './products'
import {CartContext} from './Cart';
 
const Items = ({id, img, title, description,price, quantity}) => {
const { removeItem, increment, decrement  } = useContext(CartContext);

    return (
        <>
         <div className="items_info">
                    <div className="product_img">
                        <img src={img} alt=""/>
                    </div>
                <div className="title">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>

                <div className="add_minus_quanity">
                    <h2 onClick={() => decrement(id)}> - </h2>
                    <input type="text" name="" placeholder={quantity} id=""/>
                    <h2 onClick={() => increment(id)}> + </h2>
                </div>

                <div className="price">
                    <h3>{price}</h3>
                </div>

                <div className="button_remove">
                    <button onClick={() => removeItem(id)}  >Remove</button>
                
                </div>
                </div> 
                    <hr/>
               
            
        </>
    )
}

export default Items
