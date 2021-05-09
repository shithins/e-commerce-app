import React from 'react';
import './orderpage.css';

const Orderpage = () => {
    return(
        <div className="order-main"> 
        <div className="order-table-main">
            <div className="solo-box1">
                <table>
                    <tr>
                    <th>Product</th>
                    <th>Delivery date</th>
                    <th>Status</th>
                    <th>Amount</th>
                    </tr>
                    <tr>
                        <td>Hoodies</td>
                        <td>01/06/2021</td>
                        <td>Shipped</td>
                        <td>798/-</td>
                    </tr>
                </table>
            </div>
            <div className="solo-box2">
            <table>
                    <tr>
                    <th>Product</th>
                    <th>Delivery date</th>
                    <th>Status</th>
                    <th>Amount</th>
                    </tr>
                    <tr>
                        <td>Apple Airpod</td>
                        <td>30/05/2021</td>
                        <td>Shipped</td>
                        <td>12,000/-</td>
                    </tr>
                </table>
            </div>
            <div className="solo-box3">
            <table>
                    <tr>
                    <th>Product</th>
                    <th>Delivery date</th>
                    <th>Status</th>
                    <th>Amount</th>
                    </tr>
                    <tr>
                        <td>Shirt</td>
                        <td>20/05/2021</td>
                        <td>Shipped</td>
                        <td>1250/-</td>
                    </tr>
                </table>
            </div>
        </div>
        </div>
    )
}

export default Orderpage;