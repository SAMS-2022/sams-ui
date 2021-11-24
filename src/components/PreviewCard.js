import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Component } from 'react';
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

class PreviewCard extends Component {

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
            {this.props.title}
            </Card.Text>
            <Card.Title>{this.props.desc}</Card.Title>
            <Card.Title>{this.props.date}</Card.Title>
            <Button variant="primary">{this.props.buttonText}</Button>
        </Card.Body>
        </Card>
      </div>
      );
    }
  }
  
  export default PreviewCard;