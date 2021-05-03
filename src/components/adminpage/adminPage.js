import React ,{useState} from 'react';
import './adminPage.css'
import Ordertable from "./ordertable";
import Producttable from './producttable';
import Stocktable from "./stocktable";


const Adminpage = () => {
    //useState
    const[selectedOption,setSelectedOption]=useState('order');

    return(

       <div className="main-div">
           <div className="profile-info">
                
           </div>
            <div className="top-bar">
                <h3 onClick={()=> setSelectedOption('order')}>ORDERS</h3>
                <h3 onClick={()=> setSelectedOption('stock')}>STOCKS</h3>
                <h3 onClick={()=> setSelectedOption('product')}>PRODUCTS</h3>
            </div>
           <div className={selectedOption=="order"?'':"table-disabled"}>
               <Ordertable />
           </div>
          
           <div className={selectedOption=="stock"?'':"table-disabled"}>
                    <Stocktable />
           </div>

           <div className={selectedOption=="product"?'':"table-disabled"}>
                    <Producttable />
           </div>
       </div>

    )

}


export default Adminpage;