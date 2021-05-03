import React from 'react';
import './adminPage.css'

const Adminpage = () => {
    return(

       <div className="main-div">
           <div className="profile-info">
                
           </div>
            <div className="top-bar">
                <h3>ORDERS</h3>
                <h3>STOCKS</h3>
                <h3>ADD PRODUCT</h3>
            </div>
            <div className="ad-table">
                <table>
                    <tr>
                    <th>Recent Orders</th>
                    </tr>
                    <tr>
                        <th>
                            Product ID
                        </th>
                        <th>Buyer Name</th>
                        <th>Address</th>
                        <th>Order Date</th>
                        <th>Delivery Date</th>
                        <th>Payment Method</th>
                        <th>Status</th>
                        <th>Price</th>
                    </tr>
                </table>
            </div>
       </div>

    )

}


export default Adminpage;