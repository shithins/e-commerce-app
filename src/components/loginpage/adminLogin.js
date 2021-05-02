import React from 'react';
import './adminLogin.css';

const adminLogin = () => {
    return(
       <div>
           <form className="adminForm">
               <div>
                   <h1>Login</h1>
               </div>
               <div>
                   <label htmlFor="phone">Phone.No</label>
                   <input type="phone" id="phone" placeholder="Enter phone"
                   required onChange></input>
               </div>
           </form>
       </div>
    )
}

export default adminLogin;