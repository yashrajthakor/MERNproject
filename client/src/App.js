import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import ErrorPage from './components/ErrorPage';
import 'bootstrap/dist/css/bootstrap.css';
import Logout from './components/Logout';


function App() {
  return (
   <>
   <Navbar/>
   <Switch>
   <Route exact path="/"> <Home/> </Route>

    <Route path="/about"> <About/>  </Route>

   <Route path="/contact">  <Contact/>  </Route>

   <Route path="/login"> <Login/> </Route>

   <Route path="/signup"><Signup/> </Route>
   <Route path="/logout"><Logout/> </Route>
   
   <Route><ErrorPage/> </Route>
   </Switch>
    </>
  );
}

export default App;
