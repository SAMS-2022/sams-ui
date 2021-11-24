import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components-css/CredentialsForm.css";
import { Component } from 'react';

class CredentialsForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }


    handleSubmit(event) {
      event.preventDefault();
    }
    
    render() {
      return (
        <div className="Login">
        
      </div>
      );
    }
  }
  
  export default CredentialsForm;