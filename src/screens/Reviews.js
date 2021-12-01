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


class Reviews extends Component {

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
              <Card style={{ width: '60rem', color: "black" }}>
      <Card.Body>
      <Card.Text>
          {this.props.title}
          </Card.Text>
          <Card.Title>How to setup firebase</Card.Title>
          <Card.Title>{this.props.date}</Card.Title>
          <Card.Title style={{ color: 'rgb(255, 118, 117)' }}>Status: Review Not Started</Card.Title>
          <iframe frameborder="0" scrolling="no"
        width="640" height="680"
        src={"data:application/pdf;base64,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ZXJzaW9uIDExLjUuMiBcKEJ1aWxkIDIwRzk1XCkgUXVhcnR6IFBERkNvbnRleHQpCi9DcmVhdG9yIChXb3JkKSAvQ3JlYXRpb25EYXRlIChEOjIwMjExMTI5MDIwMzQyWjAwJzAwJykgL01vZERhdGUgKEQ6MjAyMTExMjkwMjAzNDJaMDAnMDAnKQo+PgplbmRvYmoKeHJlZgowIDE0CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDI2OCAwMDAwMCBuIAowMDAwMDAzMjE2IDAwMDAwIG4gCjAwMDAwMDAwMjIgMDAwMDAgbiAKMDAwMDAwMDM3MiAwMDAwMCBuIAowMDAwMDAzMTgxIDAwMDAwIG4gCjAwMDAwMDAwMDAgMDAwMDAgbiAKMDAwMDAwMzM0OCAwMDAwMCBuIAowMDAwMDAwNDY5IDAwMDAwIG4gCjAwMDAwMDMyOTkgMDAwMDAgbiAKMDAwMDAwMzg4MiAwMDAwMCBuIAowMDAwMDAzNTM4IDAwMDAwIG4gCjAwMDAwMDQxMTggMDAwMDAgbiAKMDAwMDAxMjUzNCAwMDAwMCBuIAp0cmFpbGVyCjw8IC9TaXplIDE0IC9Sb290IDkgMCBSIC9JbmZvIDEzIDAgUiAvSUQgWyA8NzZkN2M1MTNjMjE1NzkwMmE0MzkyNWFiOTUyODZjNzU+Cjw3NmQ3YzUxM2MyMTU3OTAyYTQzOTI1YWI5NTI4NmM3NT4gXSA+PgpzdGFydHhyZWYKMTI3NTAKJSVFT0YK"}  type="application/pdf">
        </iframe>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label style={{ fontSize: '15px'}}>Review the submission</Form.Label>
                <Form.Control type="email" placeholder="Enter Review Score" onChange={e => this.setState({ email: e.target.value })}/>
            </Form.Group>
            <Button><Link to={'/reviewSuccess'} className="action_btn">Submit Review Score</Link></Button>
          
          
      </Card.Body>
      </Card>
              </header>
          </div>
        );
      }
  }
  
  export default Reviews;