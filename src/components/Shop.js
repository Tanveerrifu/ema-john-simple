import React from 'react'
import fakeData from '../fakeData'
import { useState } from 'react';
import './Shop.css'
import Products from './product/Products';
import Cart from './cart/Cart';


const Shop = () => {
   const first10=fakeData.slice(0,10);
    const [products, setproducts] = useState(first10)
    const [cart, setcart] = useState([]);
    
    const handleAddProduct=(product)=>{
    const newCart=[...cart,product]
    setcart(newCart);
    }
    return (
    <div className='shop-container'>
        <div className="product-container">
        {
            products.map(
                pd=> <Products product={pd} 
                handleAddProduct={handleAddProduct}
            />)
            
        }
        </div>
        <div className="cart-container">
            <Cart cart={cart} />
        </div>
       
    </div>
    )
}

export default Shop
