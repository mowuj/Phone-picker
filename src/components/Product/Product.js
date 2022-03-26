import React from 'react';
import './Product.css'
import {BsFillCartPlusFill} from "react-icons/bs"
const Product = (props) => {
    const {addToCart, product} = props;
    const { name,price,img,company } =product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
            <p>{ company}</p>
            <p>$ { price}</p>
            </div>
            <button className='btn-cart' onClick={() => addToCart(product)}>
            <p className='btn-text'>Add To Cart <BsFillCartPlusFill className='cart-icon'></BsFillCartPlusFill> </p>
            </button>
        </div>
    );
};

export default Product;