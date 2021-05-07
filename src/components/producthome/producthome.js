import React from 'react';
import './producthome.css'
//import CarouselContainer from '../carousel/carousel';
import sampleproduct1 from '../../images/product1.jpeg';
import sampleproduct2 from '../../images/product2.jpeg';
import sampleproduct3 from '../../images/product3.jpeg';
import sampleproduct4 from '../../images/product4.jpeg';
import sampleproduct5 from '../../images/product5.jpeg';
import sampleproduct6 from '../../images/product6.jpeg';

const Productpage = () => {
    return(
        <div className="product-main">
            <div className="product-card-1">
                <img src={sampleproduct1} />
                <h2>Shoes</h2>
                <h3>4000/-</h3>
                <button>BUY</button>
                <button>ADD TO CART</button>
            </div>
            <div className="product-card-2">
                <img src={sampleproduct2} />
                <h2>dress</h2>
                <h3>1500/-</h3>
                <button>BUY</button>
                <button>ADD TO CART</button>

            </div>
            <div className="product-card-3">
                <img src={sampleproduct3} />
                <h2>watch</h2>
                <h3>3000/-</h3>
                <button>BUY</button>
                <button>ADD TO CART</button>
            </div>
            <div className="product-card-4">
                <img src={sampleproduct4} />
                <h2>Camera</h2>
                <h3>50000/-</h3>
                <button>BUY</button>
                <button>ADD TO CART</button>
            </div>
            <div className="product-card-5">
                <img src={sampleproduct5} />
                <h2>Laptop</h2>
                <h3>65000/-</h3>
                <button>BUY</button>
                <button>ADD TO CART</button>
            </div>
            <div className="product-card-6">
                <img src={sampleproduct6} />
                <h2>Formals</h2>
                <h3>5000/-</h3>
                <button>BUY</button>
                <button>ADD TO CART</button>
            </div>
        </div>
    )
}

export default Productpage;