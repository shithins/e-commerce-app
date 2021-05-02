import Navbar from './components/navBar/navBar'
import './App.css';
import Homebody from './components/homebody/homeBody'
import Adminlogin from './components/loginpage/adminLogin'
import Adminpage from './components/adminpage/adminPage'
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
          <route path="/adminpage" exact>
            <Adminpage />
          </route>
          <route path="/adminlogin" exact >
              <Adminlogin />
          </route>
      </Switch>
  </Router>
   </div>
  );
}


export default App;
