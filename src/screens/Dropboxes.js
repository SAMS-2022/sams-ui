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
              <PreviewCard title="Dropbox 1" desc="This is a dropbox description" date="10/13/21" inReview={null} buttonText="Add Submission"/>
              <PreviewCard title="Dropbox 2" desc="This is a dropbox description" date="10/13/21" inReview={null} buttonText="Add Submission"/>
              <PreviewCard title="Dropbox 3" desc="This is a dropbox description" date="10/13/21" inReview={null} buttonText="Add Submission"/>
              <PreviewCard title="Dropbox 4" desc="This is a dropbox description" date="10/13/21" inReview={null} buttonText="Add Submission"/>
              <PreviewCard title="Dropbox 5" desc="This is a dropbox description" date="10/13/21" inReview={null} buttonText="Add Submission"/>
              </header>
          </div>
        );
      }
  }
  
  export default Dropboxes;