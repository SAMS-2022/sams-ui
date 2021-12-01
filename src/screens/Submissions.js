import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import PreviewCard from "../components/PreviewCard";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import {
    Link
  } from "react-router-dom";


class Submissions extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
        this.state = {submissions: []};
        
    }

    componentDidMount() {
      this.sendRequest();
   }

    sendRequest(){
      
        
      var url = "https://ia2067.pythonanywhere.com/getAllDropboxes";
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url);
      xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("Content-Type", "application/json");

      var data = JSON.stringify({"username": localStorage.getItem("username")});
      console.log(data)
      xhr.send(data);

      var subss = [];

      xhr.onreadystatechange = () =>  {
          if (xhr.readyState === 4) {
              //console.log(xhr.status);
              //console.log(xhr.responseText);
              //console.log(xhr.response);
              var responseData = JSON.parse(xhr.response);
              console.log(responseData);
             
                  //console.log("got submissions");
                  //console.log(responseData.DropBoxes);
                  
                  for(var dropbox in responseData){
                    var subs = responseData[dropbox]
                    console.log(subs);
                      for(var sub in subs.Submissions){
                        console.log(sub);
                        var sub = subs.Submissions[sub]
                           
                        console.log(sub);
                          var submission = {"title": sub.title,
                          "author": sub.authors,
                          "papers": sub.papers,
                          "subID": sub.submissionID,
                          "submitter": sub.submissionID};
                          console.log(submission);
                          subss.push(submission)
                      }
                  }
          }
          this.setState({submissions: subss})
        };

          //console.log(this.state)
        }
  

    handleSubmit(event) {
      event.preventDefault();
    }
    
    render() {
      
      //review -> NONE, IN, DONE
      var load = (
          <div>
        <pageDesc>Looking for new submissions </pageDesc>  
      <Spinner size="lg" animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner></div>);

      var submissions = this.state.submissions.reverse().map((sub, i) => {
        return( (<PreviewCard type={"SUB_D"} author={sub["author"]} submitter={sub["submitter"]} numPap={sub["papers"].length} title={sub["title"]} subID={sub["subID"]} desc={sub["author"]} papers={sub["papers"]} buttonText="View Submission"/>))
      });

      var val = (this.state.submissions.length != 0) ? submissions: load

        return (
          <div style={{ fontFamily: '"Roboto", sans-serif' }} className="App">
              <header className="App-header">
              <pageTitle>All SAMS 2022 Submissions</pageTitle>         
              {val}
              </header>
          </div>
        );
      }
  }
  
  export default Submissions;