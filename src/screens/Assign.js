import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { usePdf } from 'react-pdf-js';
import Form from "react-bootstrap/Form";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {
  Link
} from "react-router-dom";
import Button from "react-bootstrap/Button";

// Import the functions you need from the SDKs you need

import firebase from './Firebase';

import FloatingLabel from "react-bootstrap/FloatingLabel";

// import { MDBSelect } from "mdbreact";


class Assign extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.getUsers = this.getUsers.bind(this);
     
        
        this.state={paper: null, papers: [], subID: null, users: [], sUsers:[], selectedUsers: []};

        
      }

      componentDidMount = () => {
        this.sendRequest();
        this.getUsers();
    
     }


      sendRequest(){

        // var papers = JSON.parse(localStorage.getItem("currPapers"));
        // this.setState({papers: papers});

        var subID = JSON.parse(localStorage.getItem("subID"));
        this.setState({subID: subID});

        console.log(this.state)
        
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
                console.log(xhr.status);
                console.log(xhr.responseText);
                console.log(xhr.response);
                var responseData = JSON.parse(xhr.response);
                console.log(responseData);
                if(responseData.success == true){
                    console.log("got submissions");
                    console.log(responseData.DropBoxes);
                    
                    for(var dropbox in responseData.DropBoxes){
                      var subs = responseData.DropBoxes[dropbox]
                      console.log(dropbox);
                        for(var sub in subs){
                            console.log(this.state.papers)
                                console.log(sub);
                                var submission = {"title": subs[sub].title,
                                "author": subs[sub].authors,
                                "papers": subs[sub].papers,
                                "subID": subs[sub].submissionID,
                                "submitter": subs[sub].submissionID};
                              
                                
                                subss.push(submission);
                            
                        }
                    }
                    console.log(subss)
                }
            }
            
          };

          //localStorage.setItem("papers", JSON.stringify(subss));
          var paper = JSON.parse(localStorage.getItem("currPapers"))[0];
          console.log(paper)
          this.setState({paper: paper})

          }

  

    getUsers(){
      var accountsRef = firebase.database().ref('Accounts');
      accountsRef.once('value').then(snapshot => {
      // snapshot.val() is the dictionary with all your keys/values from the '/store' path
      console.log(snapshot.val())
      this.setState({users: snapshot.val()});
      })
    }

    handleSubmit(event) {
      event.preventDefault();
    }

    handleSelect(event) {
        var vals = this.state.selectedUsers;
        console.log(event);
        var newVals = vals.push(event.value)
        this.setState({ selectedUsers: newVals });
    }

    
    


    render() {

        console.log(this.state)

        var paper = (this.state.paper) ? (<iframe frameborder="0" scrolling="no"
        width="640" height="680"
        src={this.state.paper.paper}  type="application/pdf">
        </iframe>) : (<pageDesc>Loading Paper</pageDesc>)

        var title = (this.state.paper) ? (<pageTitle>Title: {this.state.paper.name}</pageTitle>) : (<pageTitle>Loading Submission</pageTitle>)
  
        const animatedComponents = makeAnimated();









        
      //   var li = []
      //   for(var user in users){
      //     //var user = this.state.users[user];
      //     console.log(user)
          
      //       li.push({value: user, label: user})
        
          
      //   }
      //     console.log(li)
      // }
      // )

      
    


      const styles = {
        control: (base, state) => ({
            ...base,
            borderRadius: '5px',
            color: "#000000",
            fontSize: "15px",
            border: '1px solid #E5F7FF',
            boxShadow: 'none',
            boxSizing: 'border - box',
            wordWrap: "break-word",
            '&:hover':
                {
                    border: '1px solid #0679A8',
                }
        }),
        valueContainer: (provided, state) => ({
            ...provided,
            textOverflow: "ellipsis",
            maxWidth: "90%",
            fontSize: "15px",
            color: "#000000",
            whiteSpace: "nowrap",
            overflow: "hidden",
            display: "initial"
        })
    };

      var selectUser = (true) ? (<Select 
        onChange={this.handleSelect}
closeMenuOnSelect={false}
components={animatedComponents}
isMulti
placeholder="Select Submitters to Assign To"
options={this.state.users}
    styles={styles}
theme={(theme) => ({
  ...theme,
  
  borderRadius: 5,
  width: '300px',
  color: "#000000",
  colors: {
  ...theme.colors,
  color: "#000000",
    text: 'black',
    primary25: '#74b9ff',
    primary: 'black',
    
  },
})}
/>): (<pageDesc>Loading...</pageDesc>)

          
console.log(this.state)

          


        return (
          <div className="App">
              <header className="App-header">
              {title}
              <pageDesc>Assign this submission below!</pageDesc>
              
              
              {selectUser}
  


              <div></div>
              {paper}
              <div className="action_btn">
                <Button><Link to={'/dropboxes'} className="action_btn">Confirm Assignment</Link></Button>
              </div>
              </header>
              
          </div>
          
        );
      }
  }
  
  export default Assign;