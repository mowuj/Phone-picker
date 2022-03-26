import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { name,img } = props;

    return (
        <div className='cart'>
            <img src={img} alt="" />
            <p>  {name}</p>
            
            
        </div>
    );
};

export default Cart;