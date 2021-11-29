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
            <Card.Title style={{ color: 'rgb(255, 118, 117)' }}>{(this.props.review === "NONE") ? "Status: Review Not Started": ""}</Card.Title>
            <Card.Title style={{ color: 'rgb(253, 203, 110)' }}>{(this.props.review === "IN") ? "Status: In Review": ""}</Card.Title>
            <Card.Title style={{ color: 'rgb(85, 239, 196)' }}>{(this.props.review === "DONE") ? "Status: Review Complete": ""}</Card.Title>
    
            <Button variant="primary">{this.props.buttonText}</Button>
        </Card.Body>
        </Card>
      </div>
      );
    }
  }
  
  export default PreviewCard;