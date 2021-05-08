import React from 'react';
import '../userSignup/signup.css';
import signupimg from '../../images/wel-model3.png'
import {Redirect,useHistory} from 'react-router-dom';

const Usersignup =() => {
    const history = useHistory()
    return(  
        <div className="signup-main">
            <div className="signup-wel">
            <h1>Hey..</h1>
                <h3>Welocme.. <br/>
                CONGRATULATION <br/> for taking the Wise Decision <br/></h3>
                <img src={signupimg} alt=""/>
                <h3>Register and <br/>Make the Value <br/> for Your Decision </h3>
                
                <h4>Yes,I Exist</h4>
                <h2 onClick={ () => history.push("/userlogin")}>Go To Login</h2>
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