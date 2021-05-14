import React from 'react';
import './producthome.css'
//import CarouselContainer from '../carousel/carousel';
import sampleproduct1 from '../../images/product1.jpeg';


const Productpage = () => {
    return(
        <div className="product-main">

            <div className="pro-card-main">
            <div className="product-card-1">
                <img src={sampleproduct1} />
                <h2>Shoes</h2>
                <h3>4000/-</h3>
                <button>BUY</button>
                <button>ADD TO CART</button>
            </div>
            <div className="product-card-1">
                <img src={sampleproduct1} />
                <h2>Shoes</h2>
                <h3>4000/-</h3>
                <button>BUY</button>
                <button>ADD TO CART</button>
            </div>
            <div className="product-card-1">
                <img src={sampleproduct1} />
                <h2>Shoes</h2>
                <h3>4000/-</h3>
                <button>BUY</button>
                <button>ADD TO CART</button>
            </div>
            <div className="product-card-1">
                <img src={sampleproduct1} />
                <h2>Shoes</h2>
                <h3>4000/-</h3>
                <button>BUY</button>
                <button>ADD TO CART</button>
            </div>
            <div className="product-card-1">
                <img src={sampleproduct1} />
                <h2>Shoes</h2>
                <h3>4000/-</h3>
                <button>BUY</button>
                <button>ADD TO CART</button>
            </div>
            <div className="product-card-1">
                <img src={sampleproduct1} />
                <h2>Shoes</h2>
                <h3>4000/-</h3>
                <button>BUY</button>
                <button>ADD TO CART</button>
            </div>
            </div>

        </div>
    )
}

export default Productpage;