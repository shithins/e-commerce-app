import React from 'react';
import './addProduct.css';

const Addproduct = () => {
    return(
<div className="add-main">
    <label htmlFor="name">Product name</label>
    <input type="text" />
    <label htmlFor="details">Product Details</label>
    <input type="text"/>
    <label htmlFor="category">Category</label>
    <input type="text"/>
    <label htmlFor="price">Price</label>
    <input type="number"/>
    <label htmlFor="stock">Stock</label>
    <input type="number"/>
    <label htmlFor="image">Product Image</label>
    <input type="file"/>
    

</div>
    )
}


export default Addproduct;