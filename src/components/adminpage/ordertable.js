import React from 'react';
import './adminPage.css';

const Ordertable = () => {

    return(
        
             <div className="ad-table">
                <table>
                   
                    <tr>
                        <th>
                            Product 
                        </th>
                        <th>Buyer Name</th>                     
                        <th>Status</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>vaisakh</td>
                        <td>vasu</td>
                        <td><input type="text"/></td>
                        <td>1 RS/-</td>
                    </tr>
                    <tr>
                        <td>Arun shijo</td>
                        <td>deepak</td>
                        <td><input type="text"/></td>
                        <td>0.5 RS/-</td>
                    </tr>
                    <tr>
                        <td>ashiqu</td>
                        <td>babu namboothiri</td>
                        <td><input type="text"/></td>
                        <td>10 RS/-</td>
                    </tr>
                    
                    
                    <tr>
                        <td>Shithin</td>
                        <td>bill gates</td>
                        <td><input type="text"/></td>
                        <td>1.00</td>
                    </tr><tr>
                        <td>Shithin</td>
                        <td>bill gates</td>
                        <td><input type="text"/></td>
                        <td>1.00</td>
                    </tr><tr>
                        <td>Shithin</td>
                        <td>bill gates</td>
                        <td><input type="text"/></td>
                        <td>1.00</td>
                    </tr><tr>
                        <td>Shithin</td>
                        <td>bill gates</td>
                        <td><input type="text"/></td>
                        <td>1.00</td>
                    </tr><tr>
                        <td>Shithin</td>
                        <td>bill gates</td>
                        <td><input type="text"/></td>
                        <td>1.00</td>
                    </tr><tr>
                        <td>Shithin</td>
                        <td>bill gates</td>
                        <td><input type="text"/></td>
                        <td>1.00</td>
                    </tr>
                </table>
            </div>
        
    
    )
}

export default Ordertable;