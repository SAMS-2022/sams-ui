import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import {
    Link
  } from "react-router-dom";
import SamNavbar from "../components/SamNavbar";
import { Alert } from "react-bootstrap";


class Home extends Component {

    constructor(props) {
        super(props);
        //this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    render() {

        if(localStorage.getItem("loggedIn")=="false"){
      return (
          
          <div className="App">
           
          <header className="App-header">
              
            <homeTitle>Welcome to SAMS 2022</homeTitle>
            <homeSub>Create an account or sign in below!</homeSub>
            <div className="action_btn">
              <Button><Link to={'/createAccount'} className="action_btn">Create Account</Link></Button>
              <Button><Link to={'/login'} className="action_btn">Log In</Link></Button>
            </div>
          </header>
        </div>
      );
    }
    else{
      if(localStorage.getItem("role")=="PCC"){
        return (
          
          <div className="App">
           
          <header className="App-header">
              
            <homeTitle>Welcome to SAMS 2022</homeTitle>
            <homeSub>Start by assigning papers to reviewers!</homeSub>
            <div className="action_btn">
              <Button><Link to={'/submissions'} className="action_btn">View All Submissions</Link></Button>
            </div>
          </header>
        </div>
      );
  } 
  else{
    if(localStorage.getItem("role")=="PCM"){
      return (
        
        <div className="App">
         
        <header className="App-header">
            
          <homeTitle>Welcome to SAMS 2022</homeTitle>
          <homeSub>Start reviewing submissions!</homeSub>
          <div className="action_btn">
            <Button><Link to={'/reviews'} className="action_btn">Review Submissions</Link></Button>
          </div>
        </header>
      </div>
    );
      }
      if(localStorage.getItem("role")=="Admin"){
        return (
          
          <div className="App">
          <header className="App-header">
              
            <homeTitle>Welcome to SAMS 2022</homeTitle>
            <homeSub>Configure SAMS 2022</homeSub>
            <div className="action_btn">
              <Button><Link to={'/deadlines'} className="action_btn">Change Deadlines</Link></Button>
              <Button><Link to={'/notifications'} className="action_btn">Change Notifications</Link></Button>
            </div>
          </header>
        </div>
      );
        }
  
  
  else
      
        //DASHBOARD
        return (
          
            <div className="App">
             
            <header className="App-header">
                
              <homeTitle>Welcome to SAMS 2022</homeTitle>
              <homeSub>Start by uploading your paper!</homeSub>
              <div className="action_btn">
                <Button><Link to={'/dropboxes'} className="action_btn">View Submission Dropboxes</Link></Button>
              </div>
            </header>
          </div>
        );
    }
  }
    }}
  export default Home;


