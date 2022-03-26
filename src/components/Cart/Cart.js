import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { name } = props;

    return (
        <div className='cart'>
            
            <p>{name}</p>
            
        </div>
    );
};

export default Cart;