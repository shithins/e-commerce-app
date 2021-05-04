import React, { useState } from 'react';
import './addProduct.css';
import Axios from "../../axios";
import FileBase from "react-file-base64";

const Addproduct = () => {
    //using use state for setting states
    const [addSuccess,setAddSuccess]=useState(false)
    const [misField,setMisField]=useState(false)
    const [product,setProduct]=useState("")
    const [details,setDetails]=useState("")
    const [category,setCategory]=useState("")
    const [price,setPrice]=useState("")
    const [Stock,setStock]=useState("")
    const [file,setFile]=useState([])
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
   const fileHandler = async(files) => {
       
       let arr=[]
   await files.map((img,index) => {
           let data={
               Image:img.base64,
               Type:img.file.type
           }
           arr.push(data)
       })
      setFile(arr)
      
   }
   const productSubmission = (e) => {
       e.preventDefault()
       if(product==""||details==""||category==""||price==""||Stock==""||file==['']){
                return setMisField(true)
    }
    setMisField(false)
    
     
       console.log("calling")
       Axios.post("/admin/addproduct",{product:product,
        details:details,category:category,price:price,stock:Stock,image:file})
        .then((Response) => {
            alert(Response.data.err)
            //checking error and responses
        } )
   }
    return(
<div className="add-main">
    <div className={misField?"invalid-msg":"invalid-msg-disabled"}>
        <h4>&#x1F4E2; &#128679; &#128679; Add all fields!!!!!</h4>
    </div>
    <div className={addSuccess=="addsucc-msg"}>
        <h3>YOU SUCCESSFULLY ADDED<br/> THE PRODUCT</h3>
    </div>
    <form>
    <label htmlFor="name">Product name</label>
    <input type="text" onChange={productHandler} required/>
    <label htmlFor="details">Product Details</label>
    <input type="text" onChange={detailHandler} required/>
    <label htmlFor="category">Category</label>
    <input type="text" onChange={categoryHandler} required/>
    <label htmlFor="price">Price</label>
    <input type="number" onChange={priceHandler} required/>
    <label htmlFor="stock">Stock</label>
    <input type="number" onChange={stockHandler} required/>
    <label htmlFor="image">Product Image</label>
    <FileBase type="file" multiple={true} 
    onDone = {fileHandler} required/>
    <button type="submit" className="addprod-btn" onClick={productSubmission}>Add Product</button>
    </form>


</div>
    )
}


export default Addproduct;