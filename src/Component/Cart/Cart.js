import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const {cart}=props;
    let total=0;
    let shipping=0;
    for(const product of cart){
        total=total+product.price;
        shipping=shipping+product.shipping;
    }
    const tax=parseFloat((total*10/100).toFixed());
    const grandtotal=parseFloat((total+shipping+tax).toFixed(2));
    
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Item : {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shopping Charge: ${shipping}</p>
            <p>Tax : ${tax}</p>
            <h5>Grand Total: ${grandtotal}</h5>
            <button className='clear'>Clear Cart</button>
            <button className='order'>Review Order</button>
        </div>
    );
};

export default Cart;