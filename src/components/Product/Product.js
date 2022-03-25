import React from 'react';
import './Product.css'
const Product = (props) => {
    const {addToCart, product} = props;
    const { name,price,img,company } =product;
    console.log(name)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p>{name}</p>
            <p>{ company}</p>
            <p>$ { price}</p>
            </div>
            <button onClick={()=>addToCart(product)}>Add To Cart</button>
        </div>
    );
};

export default Product;