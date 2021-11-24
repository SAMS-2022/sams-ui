import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import PreviewCard from "../components/PreviewCard";
import Button from "react-bootstrap/Button";
import {
    Link
  } from "react-router-dom";

class MySubmissions extends Component {

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
              <pageTitle>My Paper Submissions</pageTitle>
              <Button block size="lg" type="submit">
                <Link to={'/newSubmission'} className="action_btn">Start a new submission</Link>
                </Button>
              
              <PreviewCard title="My paper" desc="Submission description" date="10/13/21" buttonText="View Submission"/>
              <PreviewCard title="My other paper" desc="Submission description" date="10/13/21" buttonText="View Submission"/>
              <PreviewCard title="My other paper" desc="Submission description" date="10/13/21" buttonText="View Submission"/>
              <PreviewCard title="My other paper" desc="Submission description" date="10/13/21" buttonText="View Submission"/>
              <PreviewCard title="My other paper" desc="Submission description" date="10/13/21" buttonText="View Submission"/>
              </header>
          </div>
        );
      }
  }
  
  export default MySubmissions;