import React from 'react';

const Cart = (props) => {
    const { name } = props;

    return (
        <div className='cart-items'>
            
            <p>{name}</p>
            
        </div>
    );
};

export default Cart;