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
import LoggedOut from './screens/LoggedOut';
import Submission from './screens/Submission';
import Submissions from './screens/Submissions';
import Assign from './screens/Assign';
import Config from './screens/Config';
import AssignSuccess from './screens/AssignSuccess';
import ReviewSuccess from './screens/ReviewSuccess';
import Reviews from './screens/Reviews';
import NewReviews from './screens/NewReviews';

class App extends Component {
  
  constructor(props) {
    super(props);
    // localStorage.setItem('loggedIn', false);
    // localStorage.setItem('username', "");
    // localStorage.setItem('currPapers', "");
  }

  componentDidMount() {
    document.title = "SAMS 2022";
  }

  render() {

    var loggedIn = (localStorage.getItem('loggedIn') == "true") ? true: false;
    var dropboxes = (loggedIn) ? (<Route path='/dropboxes' component={Dropboxes} />): <Route path='/dropboxes' component={LoggedOut} />
    var mySubmissions = (loggedIn) ? <Route path='/mySubmissions' component={MySubmissions} />: <Route path='/mySubmissions' component={LoggedOut} />
    var info = (loggedIn) ? (<Route path='/myInfo' component={MyInfo} />): <Route path='/myInfo' component={LoggedOut} />
    var newSubmission = (loggedIn) ? (<Route path='/newSubmission' component={NewSubmission} />): <Route path='/newSubmission' component={LoggedOut} />
    var submission = (loggedIn) ? (<Route path='/submission/:submissionId' component={Submission} />): <Route path='/submission/:submissionId' component={LoggedOut} />
    var submissions = (loggedIn) ? (<Route path='/submissions' component={Submissions} />): <Route path='/submissions' component={LoggedOut} />
    var assign = (loggedIn) ? (<Route path='/assign' component={Assign} />): <Route path='/assign' component={LoggedOut} />
    var config = (loggedIn) ? (<Route path='/config' component={Config} />): <Route path='/config' component={LoggedOut} />
    var assignSuccess = (loggedIn) ? (<Route path='/assignSuccess' component={AssignSuccess} />): <Route path='/assignSuccess' component={LoggedOut} />
    var reviewSuccess = (loggedIn) ? (<Route path='/reviewSuccess' component={ReviewSuccess} />): <Route path='/reviewSuccess' component={LoggedOut} />
    var reviews = (loggedIn) ? (<Route path='/reviews' component={Reviews} />): <Route path='/reviews' component={LoggedOut} />
    var newReviews = (loggedIn) ? (<Route path='/newReviews' component={NewReviews} />): <Route path='/newReviews' component={LoggedOut} />


    return (
      <div className="App">
        <SamNavbar></SamNavbar>
        <header className="App-header">
          
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/createAccount' component={CreateAccount} />
            {dropboxes}
            {mySubmissions}
            {info}
            {newSubmission}
            {submission}
            {submissions}
            {assign}
            {config}
            {assignSuccess}
            {reviewSuccess}
            {reviews}
            {newReviews}
          </Switch>
        </header>
      </div>
    );
  }
}


export default App;
