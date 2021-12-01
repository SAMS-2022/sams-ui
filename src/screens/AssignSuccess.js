import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Button from "react-bootstrap/Button";
import {
    Link
  } from "react-router-dom";


class AssignSuccess extends Component {

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
              <pageTitle>Submission successfully assigned to: testPCM</pageTitle>
              <Button><Link to={'/submissions'} className="action_btn">Check for new submissions</Link></Button>
              </header>
          </div>
        );
      }
  }
  
  export default AssignSuccess;