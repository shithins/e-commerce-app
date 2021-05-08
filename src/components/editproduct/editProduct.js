import React from 'react';
import './editProduct.css';

const EditProduct = () => {
    return(
<div className="edit-main">
    <label htmlFor="name">Edit Product name</label>
    <input type="text" />
    <label htmlFor="details">Edit Product Details</label>
    <input type="text"/>
    <label htmlFor="category">Edit Category</label>
    <input type="text"/>
    <label htmlFor="price">Edit Price</label>
    <input type="number"/>
    <label htmlFor="stock">Edit Stock</label>
    <input type="number"/>
    <label htmlFor="image">Edit Product Image</label>
    <input type="file"/>
    <button type="submit">Add changes</button>

</div>

    )
}


export default EditProduct;