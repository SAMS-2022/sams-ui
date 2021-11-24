import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components-css/CredentialsForm.css";
import { Component } from 'react';

class CredentialsForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {username: "", 
        password: ""};
      }

    validateForm() {
      return this.state["username"].length > 3 && this.state["password"].length > 3;
    }

    handleSubmit(event) {
      event.preventDefault();
      this.props.requestF(this.state.username, this.state.password);
    }
    
    render() {
      return (
        <div >
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label style={{ marginTop: "100px"}}>Username</Form.Label>
            <Form.Control
            style={{ fontFamily: '"Roboto", sans-serif' }}
              autoFocus
              type="text"
              value={this.state.username}
              onChange={(e) => this.setState({username: e.target.value})}
            />
          </Form.Group>
          <Form.Group  controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
            style={{ fontFamily: '"Roboto", sans-serif' }}
              type="password"
              value={this.state.password}
              onChange={(e) => this.setState({password: e.target.value})}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="email">
            
            <Button style={{ marginTop: "30px"}}block size="lg" type="submit">
            {this.props.submitButtonText}
          </Button>
          </Form.Group>
          
        </Form>
      </div>
      );
    }
  }
  
  export default CredentialsForm;