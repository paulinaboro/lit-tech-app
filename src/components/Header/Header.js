import React, { Component } from "react";
import "./Header.css";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";

class Header extends Component {
  render() {
    // if (window.location.pathname === "/home" || "/allcourses") return null;
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/main">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Lit Tech
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Courses" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Design</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Databases</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Web Development
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                All Courses
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">
              <Button variant="link">Log In</Button>
            </Nav.Link>
            <Nav.Link eventKey={2} href="/signup">
              <Button variant="info">Sign Up</Button>{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Header;
