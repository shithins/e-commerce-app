import React from 'react';
import './navBar.css';
import PageviewIcon from '@material-ui/icons/Pageview';
import HomeIcon from '@material-ui/icons/Home';

const navBar = () => {


    return(
       <div className="main">
           
            <h1 >E-COM</h1>
            <div style={{flex:".5"}}>
            <PageviewIcon style={{height:"43px",width:"43px",margin:"10px",color:"black"}}/>
            <HomeIcon style={{height:"43px",width:"43px",margin:"10px",color:"black",marginTop:"25px"}}/>
            </div>
         </div>


    )

}


export default navBar