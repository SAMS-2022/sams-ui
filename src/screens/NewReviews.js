import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import PreviewCard from "../components/PreviewCard";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {
  Link
} from "react-router-dom";
import Form from "react-bootstrap/Form";


class NewReviews extends Component {

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
              <pageTitle>Submissions to Review</pageTitle>
              <pageDesc>You currently have no submissions to review 😔</pageDesc>
              </header>
          </div>
        );
      }
  }
  
  export default NewReviews;