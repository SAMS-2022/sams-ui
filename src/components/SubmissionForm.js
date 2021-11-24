import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components-css/CredentialsForm.css";
import { Component } from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Form";
import Col from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";


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
        <div >

        <Form style={{ width: '30rem'}}>
        
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Select Submission Dropbox</Form.Label>
                <FloatingLabel controlId="floatingSelect" label="Works with selects">
                    <Form.Select aria-label="Floating label select example">
                        <option>Select Dropbox</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </FloatingLabel>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Row>
                    <Col>
                    <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Last name" />
                    </Col>
                </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Paper Title</Form.Label>
                <Form.Control type="text" placeholder="Enter paper title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Authors</Form.Label>
                <Form.Control type="text" placeholder="Enter paper authors" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Paper Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter paper description here"/>
            </Form.Group>
            
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload Paper</Form.Label>
                <Form.Control type="file" accept="application/pdf,application/docx"/>
            </Form.Group>




            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
      </div>
      );
    }
  }
  
  export default CredentialsForm;