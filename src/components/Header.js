import React from 'react'
import Logo from '../images/logo.png'
import './Header.css'

const Header=()=> {
    return (
        <div>
            <img className='Logo' src={Logo} alt="" />
            <nav>
                <a href="abc">Shop</a>
                <a href="abc">Order Review</a>
                <a href="abc">Manage Inventory</a>
            </nav>
        </div>
    )
}

export default Header;
