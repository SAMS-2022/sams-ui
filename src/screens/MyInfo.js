import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import ProfileCard from "../components/ProfileCard";


class MyInfo extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }


    handleSubmit(event) {
      event.preventDefault();
    }
    

    render() {
        var username = localStorage.getItem("username");
        var role = localStorage.getItem("role");

        console.log(username);
        console.log(role);

        return (
          <div className="App">
              <header className="App-header">
              <pageTitle>Profile Information</pageTitle>
              <ProfileCard username={username} role={role} />
              </header>
          </div>
        );
      }
  }
  
  export default MyInfo;