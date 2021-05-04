import React,{useState} from 'react';
import './adminLogin.css';
import Axios from "../../axios";
import {useHistory} from 'react-router-dom';

const AdminLogin = () => {
    //useState//
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const history = useHistory() ;
    //functions//
    const emailHandler = (e) =>{
        setEmail(e.target.value)
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }
    const formSubmission = (e) => {
        e.preventDefault();
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) 
        {

                Axios.post("/admin/login",{email:email,password:password})
                .then((Response) => {
                    //checking error and responses//
                    if(Response.data.err){
                        alert(Response.data.err)
                    }
                    else history.push('/adminpage')
                })
        }
        else {}
    } 

    return(
       <div className="adminLogin">
           <form className="adminForm">
               <div className="lgntxt">
                   <h1>Login</h1>
               </div>
               <div className="formInput">
                   <label htmlFor="email">Email Address</label>
                   <input type="email" id="email" placeholder="Enter Email"
                   required onChange={emailHandler}></input>
                   <label htmlFor="password">Password</label>
                   <input type="password" id="password" 
                   placeholder="Enter Password" required 
                   onChange={passwordHandler}></input>
                    <button type="submit" onClick={formSubmission}>LOGIN</button>
               </div>
           </form>
       </div>
    )
}

export default AdminLogin;