import React from 'react';
import './adminPage.css';
import image from '../../images/image11.jpg';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import {Redirect,useHistory} from 'react-router-dom';

const Producttable = () => {
  const history=useHistory()

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

                    <tr>
                        <td>vaisakh</td>
                        <td><img className="sam-image" src={image} alt="illa"/></td>
                        <td>1.0</td>
                        <td><button><DeleteForeverIcon /></button><button><EditIcon /></button></td>

                    </tr>
                    
                </table>
                <button className="add-button" onClick={ () =>  history.push("/addproduct")}>Add product</button>
            </div>

    )
}



export default Producttable;