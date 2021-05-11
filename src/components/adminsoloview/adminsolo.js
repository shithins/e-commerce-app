import React from 'react';
import './adminsolo.css';
import soloproductimg from '../../images/hoodies1.jpeg'

const Adminsingle = () => {
    return(

        <div className="adminsolo-main">
            <div className="adminsolo-order-details">
                <img src={soloproductimg} alt="//"/>
                <h2>Hoodies</h2>
                <h3>Price :</h3>
                <h3>Order Date :</h3>
                <div className="customer-details">
                    <h3>Name :</h3>
                    <h3>Address :</h3>
                    <h3>Payment method :</h3>
                    <h3>Size :</h3>
                    <h3>Email :</h3>
                    <h3>Phone :</h3>
                </div>
               
            </div>
            
        </div>
    )
}

export default Adminsingle;