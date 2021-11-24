import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import {
  Link
} from "react-router-dom";

class SamNavbar extends Component {

    constructor(props) {
        super(props);
      }

    // setRole(role){
    //   this.setState({role: role});
    // }

    handleLogOut(event) {
      event.preventDefault();
      localStorage.setItem("loggedIn", "false");
      localStorage.setItem("role", "default");
      window.location.reload(true);
    }

    render() {

      var loggedIn = localStorage.getItem("loggedIn");
      var role = localStorage.getItem("role");

      console.log(loggedIn);
      console.log(role);


      if(loggedIn=="true"){
        if(role=="Submitter"){
          return (
            <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand><Link to={'/'} className="nav-link">SAMS 2022</Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link> <Link to={'/dropboxes'} className="nav-link">Submission Dropboxes</Link></Nav.Link>
                <Nav.Link> <Link to={'/mySubmissions'} className="nav-link">My Submissions</Link></Nav.Link>
                  <NavDropdown title="My Profile" id="basic-nav-dropdown" className="nav-link">
                    <NavDropdown.Item> <Link to={'/myInfo'} className="nav-link">Profile Information</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={this.handleLogOut}><Link to={'/'} className="nav-link">Log Out</Link></NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          );
      }

      else if(role=="PCM"){
    
        return (
          <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand><Link to={'/'} className="nav-link">SAMS 2022</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link href="#home">Submission Dropboxes</Nav.Link>
              <Nav.Link href="#home">My Reviews</Nav.Link>
                <NavDropdown title="My Profile" id="basic-nav-dropdown">
                <NavDropdown.Item> <Link to={'/myInfo'} className="nav-link">Profile Information</Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={this.handleLogOut}><Link to={'/'} className="nav-link">Log Out</Link></NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        );
      
      }
    }
    //not signed in 
    else{

      return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand><Link to={'/'} className="nav-link">SAMS 2022</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <NavDropdown title="My Profile" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to={'/createAccount'} className="nav-link">Create an account</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to={'/login'} className="nav-link">Log In</Link></NavDropdown.Item>
                
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      );
    }
  }
  
  }
  

  
  export default SamNavbar;