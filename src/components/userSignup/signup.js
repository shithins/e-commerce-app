import React from 'react';
import '../userSignup/signup.css';
import signupimg from '../../images/wel-model3.png'
import gotologin from '../../images/gotologin2.png'

const Usersignup =() => {
    return(
        <div className="signup-main">
            <div className="signup-wel">
            <h1>Hey..</h1>
                <h3>Welocme.. <br/>
                CONGRATULATION <br/> for taking the Wise Decision <br/></h3>
                <img src={signupimg} alt=""/>
                <h3>Register and <br/>Make the Value <br/> for Your Decision </h3>
                <img src={gotologin} alt=""/>
            </div>
            <div className="signup-area">
                <div className="signup-curve">
                    <h2>SIGNUP</h2>
                </div>
                <div className="fn-ln">
                <input type="text" placeholder="Firstname"/>
                <input type="text" placeholder="Lastname"/>
                </div>
                <input type="email" placeholder="Email Address"/>
                <input type="text" placeholder="Password"/>
                <input type="text" placeholder="Confirm Password"/>
                <button>Signup</button>
            </div>
        </div>
    )

    
}


export default Usersignup;