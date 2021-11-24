import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from "react-bootstrap/Spinner";

import { Component } from 'react';
import CredentialsForm from "../components/CredentialsForm";

class Login extends Component {

    constructor(props) {
        super(props);
        this.loginRequest = this.loginRequest.bind(this);
        
    }

    loginRequest(user, pass){
        
        var url = "https://ia2067.pythonanywhere.com/login";
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
              console.log(xhr.status);
              console.log(xhr.responseText);
              console.log(xhr.response);
              
              var responseData = JSON.parse(xhr.response);
              console.log(responseData.success);
              if(responseData.success == true){
                console.log("storing sign in");
                localStorage.setItem('loggedIn', "true");
                localStorage.setItem('username', user);
                localStorage.setItem('role', responseData.role);
                
                window.location.reload(true);
                //temp
                var currURL = window.location.href;
                window.location.assign(currURL.replace("/login","")); 

              }else{
                
                alert("Unable to sign in");
              }
          }};

        var data = JSON.stringify({"username": user, "password": pass});

        xhr.send(data);
    }  
    
    render() {
       
    return (
        <div style={{ fontFamily: '"Roboto Thin", sans-serif' }} className="App">
            
            <header className="App-header">
            <pageTitle>Log into your account below!</pageTitle>
                <CredentialsForm submitButtonText={"Log In"}
                requestF={this.loginRequest} />
    
            </header>
        </div>
      );
    }
  }
  
  export default Login;

