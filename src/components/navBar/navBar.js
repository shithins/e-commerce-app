import React from 'react';
import './navBar.css';
import PageviewIcon from '@material-ui/icons/Pageview';
import HomeIcon from '@material-ui/icons/Home';
import {Redirect,useHistory} from 'react-router-dom';

const NavBar = () => {
    const history=useHistory()

    return(
       <div className="main">
           
            <h1>E-COM</h1>
            <div style={{flex:".4"}}>
            <PageviewIcon style={{height:"43px",width:"43px",margin:"10px",color:"white",marginTop:"25px"}}/>
            <HomeIcon style={{height:"43px",width:"43px",margin:"10px",color:"white",marginTop:"25px"}}/>
            </div>
         </div>


    )

}


export default NavBar;