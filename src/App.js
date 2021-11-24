import './App.css';    
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react'
import Home from './screens/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './screens/Login';

import Dropboxes from './screens/Dropboxes';
import CreateAccount from './screens/CreateAccount';
import SamNavbar from "./components/SamNavbar";
import MySubmissions from './screens/MySubmissions';
import MyInfo from './screens/MyInfo';
import NewSubmission from './screens/NewSubmission';

class App extends Component {
  
  
  constructor(props) {
    super(props);
    // localStorage.setItem('loggedIn', false);
    // localStorage.setItem('username', "");
    // localStorage.setItem('role', "default");
  }

  
  
  
  render() {


    return (
      <div className="App">
        <SamNavbar></SamNavbar>
        <header className="App-header">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/createAccount' component={CreateAccount} />
            <Route path='/dropboxes' component={Dropboxes} />
            <Route path='/mySubmissions' component={MySubmissions} />
            <Route path='/myInfo' component={MyInfo} />
            <Route path='/newSubmission' component={NewSubmission} />
          </Switch>
        </header>
      </div>
    );
  }
}



export default App;
