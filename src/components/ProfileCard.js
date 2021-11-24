import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Component } from 'react';
import { Card } from "react-bootstrap";

class ProfileCard extends Component {

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
        <Card style={{ width: '60rem', color: "black" }}>
        <Card.Body>
        <Card.Text>
            Username: {this.props.username}
            </Card.Text>
            <Card.Title>Role: {this.props.role}</Card.Title>
        </Card.Body>
        </Card>
      </div>
      );
    }
  }
  
  export default ProfileCard;