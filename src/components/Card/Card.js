import React from 'react';

const Card = (props) => {
    const { name,img } = props;
    console.log(name)

    return (
        <div className='cart-items'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            
        </div>
    );
};

export default Card;