import Navbar from './components/navBar/navBar'
import './App.css';
import Homebody from './components/homebody/homeBody'
import Adminlogin from './components/loginpage/adminLogin'
import Adminpage from './components/adminpage/adminPage'
import Addproduct from './components/addproduct/addProduct'
import EditProduct from './components/editproduct/editProduct'
import Userlogin from './components/loginpage/userlogin'
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
      </Switch>
  </Router>
   </div>
  );
}


export default App;
