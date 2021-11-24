import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Button from "react-bootstrap/Button";
import {
    Link
  } from "react-router-dom";


class LoggedOut extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }


    handleSubmit(event) {
      event.preventDefault();
    }
    

    render() {
        return (
          <div className="App">
              <header className="App-header">
              <homeTitle>You are Logged Out of SAMS</homeTitle>
              <Button><Link to={'/login'} className="action_btn">Click here to log back in</Link></Button>
              </header>
          </div>
        );
      }
  }
  
  export default LoggedOut;