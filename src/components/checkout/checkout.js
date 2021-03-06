import reactDom from "react-dom";
import React from 'react';
import './checkout.css';
import checkoutimg from '../../images/hoodies3.jpeg';

const Checkout = () => {
    return(

        <div className="checkout-main">
            <div className="checkout-form1">
                <h3>Delivery Details</h3>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Fullname"/>
                    <label htmlFor="address">Address</label>
                    <input type="text" placeholder="Delivery Address"/>
                    <label htmlFor="pincode">Pincode</label>
                    <input type="number" placeholder="Pincode"/>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Email Address"/>
                    <label htmlFor="Phone">Phone</label>
                    <input type="number" placeholder="Contact Number"/>
                    <label>
                        <input type="radio" />
                        Cash On Delivery
                    </label>
                    <label>
                        <input type="radio" />
                        Net Banking
                    </label>            
                </form>
            </div>
            
            <div className="checkout-form2">
                <form>
                <h3>Hoodies</h3>
                <h4>Price : 750</h4>
                <h4>Delivery Charge : 40</h4>
                <h4>Total : 790</h4>
                </form>
                <button type="submit">Place Order</button>
            </div>

        </div>
    )

}


export default Checkout;