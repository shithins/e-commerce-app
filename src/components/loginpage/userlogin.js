import React from 'react';
import './userlogin.css';
import modelimg from '../../images/wel-model.png'


const Userlogin = () => {
    return(
        <div className="user-log-main">
            <div className="wel-area">
                <h1>Hey..</h1>
                <h3>We are very excited to have you Onboard</h3>

                
            <img src={modelimg} alt=""/>
            <h4>You reached under the right ROOF</h4>
            </div>
            <div className="login-area">
                <div className="log-curve"></div>
            </div>
        </div>
    )
}



export default Userlogin;