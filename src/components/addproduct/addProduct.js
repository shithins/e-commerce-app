import React, { useState } from 'react';
import './addProduct.css';
import Axios from "../../axios";

const Addproduct = () => {
    //using use state for setting states
    const [product,setProduct]=useState("")
    const [details,setDetails]=useState("")
    const [category,setCategory]=useState("")
    const [price,setPrice]=useState("")
    const [Stock,setStock]=useState("")
   //function calling 
   const productHandler = (e) => {
        setProduct(e.target.value)
   }
   const detailHandler = (e) => {
       setDetails(e.target.value)
   }
   const categoryHandler = (e) => {
       setCategory(e.target.value)
   }
   const priceHandler = (e) => {
       setPrice(e.target.value)
   }
   const stockHandler = (e) => {
       setStock(e.target.value)
   }
   const productSubmission = (e) => {
       Axios.post("/admin/page",{product:product,
        details:details,category:category,price:price,stock:Stock})
        .then((Response) => {
            //checking error and responses
        } )
   }
    return(
<div className="add-main">
    <label htmlFor="name">Product name</label>
    <input type="text" onChange={productHandler}/>
    <label htmlFor="details">Product Details</label>
    <input type="text" onChange={detailHandler} />
    <label htmlFor="category">Category</label>
    <input type="text" onChange={categoryHandler} />
    <label htmlFor="price">Price</label>
    <input type="number" onChange={priceHandler} />
    <label htmlFor="stock">Stock</label>
    <input type="number" onChange={stockHandler} />
    <label htmlFor="image">Product Image</label>
    <input type="file" />
    <button type="submit" onClick={productSubmission}></button>
    

</div>
    )
}


export default Addproduct;