import Navbar from './components/navBar/navBar'
import './App.css';
import Homebody from './components/homebody/homeBody'
import Adminlogin from './components/loginpage/adminLogin'
import Adminpage from './components/adminpage/adminPage'
import Addproduct from './components/addproduct/addProduct'
import EditProduct from './components/editproduct/editProduct'
import Userlogin from './components/loginpage/userlogin'
import Usersignup from './components/userSignup/signup'
import Userprofile from './components/userprofile/userprofile'
import Productpage from './components/producthome/producthome'
import SingleproductPage from './components/singleproduct/singleproduct'
import Orderpage from './components/orderspage/orderpage'
import Cartpage from './components/cartpage/cartpage'
import Checkoutpage from './components/checkout/checkout'
import {BrowserRouter as Router,
Switch,
Route,
Redirect,} from "react-router-dom";
//routes for setting the paths for the pages//
function App() {
   
  return (
   <div>
   <Navbar />
  <Router>
      <Switch>
        {/* paths fot the pages */}
          <Route path="/" exact >
            <Homebody />
          </Route>
          <Route path="/adminpage" exact>
            <Adminpage />
          </Route>
          <Route path="/adminlogin" exact >
              <Adminlogin />
          </Route>
          <Route path="/addproduct" exact>
            <Addproduct />
          </Route>
          <Route path="/editproduct" exact>
            <EditProduct />
          </Route>
          <Route path="/userlogin" exact>
              <Userlogin />
          </Route>
          <Route path="/usersignup" exact>
            <Usersignup />
          </Route>
          <Route path="/userprofile">
            <Userprofile/>
          </Route>
          <Route path="/products">
            <Productpage/>
          </Route>
          <Route path="/singleproduct">
            <SingleproductPage/>
          </Route>
          <Route path="/orders">
            <Orderpage />
          </Route>
          <Route path="/cart">
            <Cartpage />
          </Route>
          <Route path="/checkout">
            <Checkoutpage />
          </Route>
      </Switch>
  </Router>
   </div>
  );
}


export default App;
