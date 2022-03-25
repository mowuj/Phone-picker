import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    // console.log(product)
    const[cart,setCart]=useState([])
    const addToCart = (phone) => {
        console.log(phone)
        const newCart=[...cart,phone]
        setCart(newCart)
    }

    useEffect(() => {
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (

        <div className='shop-container'>
            
            <div className='products-container'>
                
                {
                    products.map(product => <Product key={product.id} product={product } addToCart={addToCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                <h2>This is Cart container</h2>
            </div>
        </div>
    );
};

export default Shop;