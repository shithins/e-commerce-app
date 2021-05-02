import React from 'react';
import './homeBody.css';
import image1 from "../../images/samproduct1.jpeg";
import image2 from "../../images/samproduct2.jpeg";
const homeBody = () => {
    return(

        <div className="homeBody">
            <div className="homeText">
                <h1>EXPERIENCE THE BEST</h1>
                <h3>Get the best experience of shopping on your finger tips</h3>
            </div>
            <div className="productDis1">
                <img src={image1} alt="a product"></img>
            </div>
            <div className="productDis2">
                <img src={image2} alt="a product"></img>
            </div>
            <div className="loginBtn">
                <h2>LOGIN</h2>
            </div>
            <div className="shopNow1">
                <h2>Shop Now</h2>
            </div>
            <div className="shopNow2">
                <h2>Shop Now</h2>
            </div>

        </div>
    );

}

export default homeBody;