import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components-css/CredentialsForm.css";
import { Component } from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Form";
import Col from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";


class CredentialsForm extends Component {

    constructor(props) {
        super(props);
        this.state = {dbox: "", 
        fname: "", 
        lname: "", 
        email: "", 
        title: "", 
        authors: "", 
        desc: "", 
        paper: "",
        fileBase64: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    sendRequest(){
        
        var url = "https://ia2067.pythonanywhere.com/submitPaper";
        //var url = "http://127.0.0.1:5000/submitPaper";
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        
        var data = JSON.stringify({"username": localStorage.getItem("username"), 
        "title": this.state.title, "authors": this.state.authors,
        "contactAuthors": this.state.authors, 
        "paperName": this.state.title, 
        "paper": this.state.fileBase64, 
        "dropbox": "First Dropbox", 
        "submissionid": String(Math.floor(Math.random() * 100000))});
        console.log(data)
        
        xhr.send(data);
  
        
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
            console.log(xhr.response);
            var responseData = JSON.parse(xhr.response);
            console.log(responseData);
            if(responseData.success == true){
            alert("Paper Submitted!")
            
            //temp
            var currURL = window.location.href;
            window.location.assign(currURL.replace("/newSubmission","/mySubmissions")); 
            }
        }};
    }


    handleSubmit(event) {
        event.preventDefault();
      
        var fileReader = new FileReader();
        var base64;
        
        fileReader.onload = (fileLoadedEvent) => {
        base64 = fileLoadedEvent.target.result;
        // Print data in console
        this.setState({fileBase64: base64});
        console.log(base64);
        this.setState({ fileBase64: base64}, () => 
        this.sendRequest());
                
            };
        fileReader.readAsDataURL(this.state.paper);
    }
    
    render() {

        var drop = JSON.parse(localStorage.getItem("selectedDrop"));
        console.log(drop)


        var select = (drop) ? (<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style={{ fontSize: '15px'}} >Select Submission Dropbox</Form.Label>
        <FloatingLabel controlId="floatingSelect" >
            <Form.Select onChange={e => this.setState({ dbox: {drop} })}>
                <option value={drop}>{drop}</option>
            </Form.Select>
        </FloatingLabel>
    </Form.Group>) : (<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label style={{ fontSize: '15px'}} >Select Submission Dropbox</Form.Label>
                <FloatingLabel controlId="floatingSelect" >
                    <Form.Select onChange={e => this.setState({ dbox: e.target.value })}>
                        <option>Select Dropbox</option>
                        <option value="First Box">First Box</option>
                        <option value="Second Box">Second Box</option>
                    </Form.Select>
                </FloatingLabel>
            </Form.Group>)

      return (
        <div >

        <Form style={{ width: '30rem'}}>
        
            {select}
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label style={{ fontSize: '15px'}}>Name</Form.Label>
               
                    
                    <Form.Control placeholder="First name" onChange={e => this.setState({ fname: e.target.value })}/>
  
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control placeholder="Last name" onChange={e => this.setState({ lname: e.target.value })}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label style={{ fontSize: '15px'}}>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" onChange={e => this.setState({ email: e.target.value })}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label style={{ fontSize: '15px'}}>Paper Title</Form.Label>
                <Form.Control type="text" placeholder="Enter paper title" onChange={e => this.setState({ title: e.target.value })}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label style={{ fontSize: '15px'}}>Authors</Form.Label>
                <Form.Control type="text" placeholder="Enter paper authors" onChange={e => this.setState({ authors: e.target.value })}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label style={{ fontSize: '15px'}}>Paper Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter paper description here" onChange={e => this.setState({ desc: e.target.value })}/>
            </Form.Group>
            
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label style={{ fontSize: '15px'}}>Upload Paper</Form.Label>
                <Form.Control type="file" accept="application/pdf,application/docx" onChange={e => this.setState({ paper: e.target.files[0]})}/>
            </Form.Group>


            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                Submit
            </Button>
            </Form>
      </div>
      );
    }
  }
  
  export default CredentialsForm;