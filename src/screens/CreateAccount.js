import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Component } from 'react';
import CredentialsForm from "../components/CredentialsForm";
import SamNavbar from "../components/SamNavbar";

class CreateAccount extends Component {

    constructor(props) {
        super(props);
        this.createAccountRequest = this.createAccountRequest.bind(this);
      }

      createAccountRequest(user, pass){
        var url = "http://ia2067.pythonanywhere.com/createAccount";
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
                
                window.location.reload(true);
                //temp
                window.location.assign("http://localhost:3000/login"); 

              }else{
                alert("Unable to create account");
              }
          }};

        var data = JSON.stringify({"username": user, "password": pass});

        xhr.send(data);
    }  
    
    render() {
      return (
        <div className="App">
   
            <header className="App-header">
            <h1>Join SAMS 2022 by creating an account below!</h1>
                <CredentialsForm submitButtonText={"Create Account"} requestF={this.createAccountRequest} />
            </header>
        </div>
      );
    }
  }
  
  export default CreateAccount;
