import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';


class Submission extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }


    handleSubmit(event) {
      event.preventDefault();
    }
    
    render() {

        var submissionId = window.location.pathname.split("/")[2];
        console.log(submissionId);
        return (
          <div className="App">
              <header className="App-header">
              <pageTitle>Submission {submissionId}</pageTitle>
              <pageDesc>View your submission below!</pageDesc>
              {/* <img src={"data:image/jpeg;base64," + this.state.data} /> */}
              </header>
          </div>
        );
      }
  }
  
  export default Submission;