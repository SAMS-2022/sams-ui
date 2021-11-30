import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import PreviewCard from "../components/PreviewCard";
import Button from "react-bootstrap/Button";
import {
    Link
  } from "react-router-dom";


class MySubmissions extends Component {

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
      
        
      var url = "https://ia2067.pythonanywhere.com/getUsersSubmissions";
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url);
      xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("Content-Type", "application/json");

      var data = JSON.stringify({"submitter": localStorage.getItem("username")});
      console.log(data)
      xhr.send(data);

      var subss = [];

      xhr.onreadystatechange = () =>  {
          if (xhr.readyState === 4) {
              //console.log(xhr.status);
              //console.log(xhr.responseText);
              //console.log(xhr.response);
              var responseData = JSON.parse(xhr.response);
              //console.log(responseData);
              if(responseData.success == true){
                  //console.log("got submissions");
                  //console.log(responseData.DropBoxes);
                  
                  for(var dropbox in responseData.DropBoxes){
                    var subs = responseData.DropBoxes[dropbox]
                    //console.log(dropbox);
                      for(var sub in subs){
                          var submission = {"title": subs[sub].title,
                          "author": subs[sub].authors,
                          "papers": subs[sub].papers,
                          "subID": subs[sub].submissionID,
                          "submitter": subs[sub].submissionID};
                          //console.log(submission);
                          subss.push(submission)
                      }
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
      var load = (<div><PreviewCard type={"SUB"} title={"Loading Submission"} subID={""} desc={""} papers={""} buttonText="Loading"/><PreviewCard type={"SUB"} title={"Loading Submission"} subID={""} desc={""} papers={""} buttonText="Loading"/><PreviewCard type={"SUB"} title={"Loading Submission"} subID={""} desc={""} papers={""} buttonText="Loading"/></div>);

      var submissions = this.state.submissions.reverse().map((sub, i) => {
        return( (<PreviewCard type={"SUB"} title={sub["title"]} subID={sub["subID"]} desc={sub["author"]} papers={sub["papers"]} buttonText="View Submission"/>))
      });

      var val = (this.state.submissions.length != 0) ? submissions: load

        return (
          <div style={{ fontFamily: '"Roboto", sans-serif' }} className="App">
              <header className="App-header">
              <pageTitle>My Paper Submissions</pageTitle>
              <Button block size="lg" type="submit">
                <Link to={'/newSubmission'} className="action_btn">Start a new submission</Link>
                </Button>            
              {val}
              </header>
          </div>
        );
      }
  }
  
  export default MySubmissions;