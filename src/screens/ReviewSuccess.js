import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Button from "react-bootstrap/Button";
import {
    Link
  } from "react-router-dom";


class ReviewSuccess extends Component {

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
              <pageTitle>Submission successfully reviewed with score: 90%</pageTitle>
              <Button><Link to={'/'} className="action_btn">Go back home</Link></Button>
              </header>
          </div>
        );
      }
  }
  
  export default ReviewSuccess;