import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
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
                <h2>Selected Items</h2>
                {
                    cart.map((item) => (<Card key={item.id} name={ item.name} img={item.img}></Card>))
                }
                
            </div>
        </div>
    );
};

export default Shop;