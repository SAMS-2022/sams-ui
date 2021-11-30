import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Component } from 'react';
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {
  Link
} from "react-router-dom";

class PreviewCard extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {title: ""}

       
        
      }

    handleSubmit(event) {
      event.preventDefault();
      localStorage.setItem("currPapers", JSON.stringify(this.props.papers));
        
      localStorage.setItem("subID", JSON.stringify(this.props.subID));

      this.setState({title: this.props.title})

      localStorage.setItem("selectedDrop", JSON.stringify(this.props.title));

     
    }
    
    render() {


      if(this.props.type === "SUB"){
          var button = (<Button  onClick={this.handleSubmit} variant="primary"> <Link className="action_btn_no_sp" to={{
            pathname: "/submission/"+String(this.props.subID),
            papers: this.props.papers
          }}> {this.props.buttonText} </Link></Button>)
      }else{
        console.log(this.state.title)
        
        var button = (<Button  onClick={this.handleSubmit} variant="primary"> <Link className="action_btn_no_sp" to={{
          pathname: "/newSubmission/",
          title: this.state.title
        }}> {this.props.buttonText} </Link></Button>)
      }

     
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
            {/* <Button onClick={this.handleSubmit} variant="primary">{this.props.buttonText}</Button> */}
            {button}
            
        </Card.Body>
        </Card>
      </div>
      );
    }
  }
  
  export default PreviewCard;