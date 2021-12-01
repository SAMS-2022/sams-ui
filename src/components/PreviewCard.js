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
      
      localStorage.setItem("selectedDrop", JSON.stringify(this.props.db));
     
    }
    
    render() {


        var currURL = window.location.pathname;
        console.log(currURL)
       if(currURL == "/mySubmissions"){
        var view = (<Button  onClick={this.handleSubmit} variant="primary"> <Link className="action_btn_no_sp" to={{
          pathname: "/submission/"+String(this.props.subID),
          papers: this.props.papers
        }}> {this.props.buttonText} </Link></Button>)
      }
       else{

        var view = (<Button  onClick={this.handleSubmit} variant="primary"> <Link className="action_btn_no_sp" to={{
          pathname: "/newSubmission/",
          papers: this.props.papers
        }}> {this.props.buttonText} </Link></Button>)
      }
        
      

      var review = (<Button  onClick={this.handleSubmit} variant="primary"> <Link className="action_btn_no_sp" to={{
        pathname: "/assign",
        papers: this.props.papers
      }}> Assign to PCM </Link></Button>)
      
 
      var info = (this.props.type === "SUB_D") ? (<Card style={{ width: '60rem', color: "black" }}>
      <Card.Body>
      <Card.Text>
          Title: {this.props.title}
          </Card.Text>
          <Card.Title>Author: {this.props.author}</Card.Title>
          <Card.Title>Submission ID: {this.props.submitter}</Card.Title>
          <Card.Title>{this.props.numPap} {(this.props.numPap > 1) ? "Files": "File"} Uploaded</Card.Title>
          <Card.Title>Description: {this.props.desc}</Card.Title>
          <Card.Title>{this.props.date}</Card.Title>
          <Card.Title style={{ color: 'rgb(255, 118, 117)' }}>{(this.props.review === "NONE") ? "Status: Review Not Started": ""}</Card.Title>
          <Card.Title style={{ color: 'rgb(253, 203, 110)' }}>{(this.props.review === "IN") ? "Status: In Review": ""}</Card.Title>
          <Card.Title style={{ color: 'rgb(85, 239, 196)' }}>{(this.props.review === "DONE") ? "Status: Review Complete": ""}</Card.Title>
          {/* <Button onClick={this.handleSubmit} variant="primary">{this.props.buttonText}</Button> */}
          {view}
          {review}
          
      </Card.Body>
      </Card>) : (<Card style={{ width: '60rem', color: "black" }}>
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
          {view}
          
      </Card.Body>
      </Card>)

      return (
        <div className="Login">
        {info}
      </div>
      );
    }
  }
  
  export default PreviewCard;