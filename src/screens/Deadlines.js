import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';


class Deadlines extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }


    handleSubmit(event) {
      event.preventDefault();
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
                    console.log(dropbox);
                    for(var sub in subs.Notifications){
                        var val = responseData[dropbox].Notifications[sub]
                        console.log(sub);
                        var deadline = {"title": sub,
                        "value": val};
                        //console.log(submission);
                        subss.push(deadline)
                    }
                }
              
            }
            this.setState({deadlines: subss})
          };
  
            
            console.log(this.state)
          }
    

    render() {
        return (
          <div className="App">
              <header className="App-header">
              <pageTitle>Deadlines</pageTitle>
              </header>
          </div>
        );
      }
  }
  
  export default Deadlines;