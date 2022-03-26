import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    // console.log(product)
    const[cart,setCart]=useState([])
    const addToCart = (phone) => {

        const newCart=[...cart,phone]
        setCart(newCart)
    }
    const chooseItem = () => {
        const newProduct = [];
        const oneItem=Math.floor( Math.random() *cart.length )
        const newOne = (cart[oneItem])
        newProduct.push(newOne)
        setCart(newProduct)
    }
    const reset = () => {
        const newCart = [];
        setCart(newCart);
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
                    cart.map((item) => (<Cart key={item.id} name={ item.name} img={item.img}></Cart>))
                }
                {/* <h1>{choise}</h1> */}
                <button onClick={chooseItem}>Choise one</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default Shop;