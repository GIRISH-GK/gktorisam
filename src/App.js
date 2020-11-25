import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import './App.css';
import Contact from './component/Contact_Us/Contact'
import Home from './component/Home/Home'
import Login from './component/Login/Login'
import Register from './component/Register/Register'
import Trip from './component/Trip_Package/Trip'
function App() {
  return (
    <div>
      <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
  <Link className="navbar-brand" to="#"> G K Tourisam</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav" >
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active" >
        <Link className="nav-link" to="/Contact">Contact_Us</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/Trip">Trip_Package</Link>
      </li>
     <li className="nav-item1 active">
        <Link className="nav-link" to="/Login">Login</Link>
      </li>
      <li className="nav-item2 active"> 
        <Link className="nav-link" to="/Register">Register</Link>
      </li>
    </ul>
  </div>
</nav>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Trip" component={Trip}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Register" component={Register}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
