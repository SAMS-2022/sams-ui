import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import PreviewCard from "../components/PreviewCard";


class Dropboxes extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
      event.preventDefault();
    }
    
    render() {
        return (
          <div style={{ fontFamily: '"Roboto", sans-serif' }} className="App">
              <header className="App-header">
              <pageTitle>Submission Dropboxes</pageTitle>
              <PreviewCard title="First Dropbox" desc="This is a dropbox description" date="10/13/21" inReview={null} buttonText="Add Submission"/>
              <PreviewCard title="Second Dropbox" desc="This is another dropbox description" date="10/13/21" inReview={null} buttonText="Add Submission"/>
              </header>
          </div>
        );
      }
  }
  
  export default Dropboxes;