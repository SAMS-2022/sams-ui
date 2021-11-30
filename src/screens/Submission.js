import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { usePdf } from 'react-pdf-js';
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";


class Submission extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
        this.state={paper: null, papers: [], subID: null};

        //this.state = {version: 0, papers: []}

        
        
      }

      componentDidMount() {
        this.sendRequest();
    
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
  
        //   var s = null;
        //     for(var sub in subss){
        //         console.log(sub)
        //         if(sub.subID == this.state.subID){
        //             this.setState({paper: this.state.papers[0]})
        //             console.log("submission", this.state)
        //         }
        //     }
            


          }


    handleSubmit(event) {
      event.preventDefault();
    }
    
    render() {

        
        

        console.log(this.state.paper)

        
        // let optionsRender = this.state.papers.map((pap, i) => {
        //     console.log(pap);
        //     return(<option value={String(pap.title)}>{String(pap.title)}</option>)
        // });
        // console.log(this.props.location.papers)

        var paper = (this.state.paper) ? (<iframe frameborder="0" scrolling="no"
        width="640" height="680"
        src={this.state.paper.paper}  type="application/pdf">
        </iframe>) : (<pageDesc>Loading Paper</pageDesc>)

        var title = (this.state.paper) ? (<pageTitle>{this.state.paper.name}</pageTitle>) : (<pageTitle>Loading Submission</pageTitle>)

        return (
          <div className="App">
              <header className="App-header">
              {title}
              <pageDesc>View your submission paper below!</pageDesc>

{/*               
              
              <Form style={{ width: '30rem'}}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label style={{ fontSize: '15px'}}>Select Submission Version</Form.Label>
                <FloatingLabel controlId="floatingSelect" >
                    <Form.Select onChange={e => this.setState({ version: e.target.value })}>
                        <option>Select Paper Version</option>
                        {optionsRender}
                    </Form.Select>
                </FloatingLabel>
            </Form.Group>
            </Form> */}


              <div></div>
              {paper}
              </header>
              
          </div>
          
        );
      }
  }
  
  export default Submission;