import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Products = (props) => {

    const {img,name,seller,price,stock}=props.product;
    return (
        <div className='product'>
            <div>
            <img src={img}alt="" />
            </div>
            <div className='product-data'>
            <h4 className='product-name'>{name}</h4>
            <br />
            <p><small>By {seller}</small></p>
            <br />
            <p>${price}</p>
            <p><small>Only {stock} left in stock-Order soon!</small></p>
            <button 
            className='main-button'
             onClick={()=> props.handleAddProduct(props.product)}>
                 <FontAwesomeIcon icon={faCartPlus} /> Add To Cart</button>
            </div>
            
        </div>
    )
}

export default Products
