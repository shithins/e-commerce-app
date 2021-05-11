import React,{useEffect,useState} from 'react';
import './adminPage.css';
import image from '../../images/image11.jpg';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import {Redirect,useHistory} from 'react-router-dom';
import Axios from '../../axios'

const Producttable = () => {
  const history=useHistory()
  const [Products,setProducts]=useState([])

    useEffect(()=>{
        Axios.get('/admin/products').then((response)=>{
            console.log(response.data)
            setProducts(response.data)
        })
    },[])

  return(

        <div className="ad-table">
                <table>
                   
                    <tr>
                        <th>
                         Product
                        </th>
                        <th>Image</th>                     
                        <th>Price</th>
                        <th>Options</th>
                    </tr>

                    {
                        Products.map((product,key)=>{
                            return(
                                <tr>
                        <td>{product.name}</td>
                        <td><img className="sam-image" src={`data:image/${product.images[0].type};base64,${product.images[0].image}`} alt="illa"/></td>
                        <td>{product.price}</td>
                        <td><button><DeleteForeverIcon /></button><button onClick={ () => history.push("/editproduct")}><EditIcon /></button></td>

                    </tr>
                            )
                        })
                    }
                    
                </table>
                <button className="add-button" onClick={ () =>  history.push("/addproduct")}>Add product</button>
            </div>

    )
}



export default Producttable;