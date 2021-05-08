import React from 'react';
import './singleproduct.css';
import hoodies1 from '../../images/hoodies4.jpeg';
import hoodies2 from '../../images/hoodies1.jpeg';
import hoodies3 from '../../images/hoodies2.jpeg';
import hoodies4 from '../../images/hoodies3.jpeg';

import similar1 from '../../images/product2.jpeg';
import similar2 from '../../images/product3.jpeg';
import similar3 from '../../images/product4.jpeg';



const SingleproductPage = () => {

    return(
        <div className="single-pro-main">
            <div className="image-section">
                <img src={hoodies1} alt="hoodies" />

            </div>
            <div className="small-img-sec1">
            <img src={hoodies2} alt="hoodies" />
            </div>
            <div className="small-img-sec2">
            <img src={hoodies3} alt="hoodies" />
            </div>
            <div className="small-img-sec3">
            <img src={hoodies4} alt="hoodies" />
            </div>
            <div className="pro-details">
                <h2>HOODIES</h2>
                <h4>Lorem ipsum, or lipsum as it is sometimes known.</h4>
                <h3>750/-</h3>
                <div className="select-color">
                    <select>
                    <option value="0">COLOURS</option>
                    <option value="1">Red</option>
                    <option value="2">White</option>
                    <option value="3">Blue</option>
                    <option value="4">Black</option>
                    </select>
                </div>
                <div className="cart-num-sec">
                <input type="number" />
                <h5>Add to Cart</h5>
                <h3>Buy Now</h3>
                </div>
            </div>
            
        </div>
    )
}



export default SingleproductPage;