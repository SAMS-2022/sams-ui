import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import PreviewCard from "../components/PreviewCard";
import {
    Link
  } from "react-router-dom";
import SubmissionForm from "../components/SubmissionForm";

class NewSubmission extends Component {

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
              <pageTitle>New Submission</pageTitle>
              <SubmissionForm></SubmissionForm>
              </header>
          </div>
        );
      }
  }
  
  export default NewSubmission;