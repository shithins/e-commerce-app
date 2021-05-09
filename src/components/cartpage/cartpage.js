import React from 'react';
import './cartpage.css'
import cartimg1 from '../../images/hoodies1.jpeg'

const Cartpage = () => {

    return(
        <div className="cart-main">
            <h2>MY CART</h2>
            <button>Buy Cart</button>
            <div className="cart-box1">
                <img src={cartimg1} alt="pro"/>
                <h1>750/-</h1>
                <h2>Hoodies</h2>
                <h4>premium quality black hoodies by vaisakh garments</h4>
                <button type="submit">Remove from Cart</button>
                <div className="cart-color-select">
                    <select>
                    <option value="0">COLOURS</option>
                    <option value="1">Red</option>
                    <option value="2">White</option>
                    <option value="3">Blue</option>
                    <option value="4">Black</option>
                    </select>
                </div>
                <div className="cart-size-selector">
                <select>
                    <option value="0">SIZE</option>
                    <option value="1">Small</option>
                    <option value="2">Medium</option>
                    <option value="3">Large</option>
                    <option value="4">X-Large</option>
                    </select>
                </div> 
                <div className="cart-buynow">
                <button>Buy Now</button>    
                </div>
            </div>
            <div className="cart-box2">
                <img src={cartimg1} alt="pro"/>
                <h1>750/-</h1>
                <h2>Hoodies</h2>
                <h4>premium quality black hoodies by vaisakh garments</h4>
                <button type="submit">Remove from Cart</button>
                <div className="cart-color-select">
                    <select>
                    <option value="0">COLOURS</option>
                    <option value="1">Red</option>
                    <option value="2">White</option>
                    <option value="3">Blue</option>
                    <option value="4">Black</option>
                    </select>
                </div>
                <div className="cart-size-selector">
                <select>
                    <option value="0">SIZE</option>
                    <option value="1">Small</option>
                    <option value="2">Medium</option>
                    <option value="3">Large</option>
                    <option value="4">X-Large</option>
                    </select>
                </div> 
                <div className="cart-buynow">
                <button>Buy Now</button>    
                </div>
            </div>
        </div>    
    )
}

export default Cartpage;