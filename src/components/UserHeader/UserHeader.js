import React, { Component } from "react";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";

class UserHeader extends Component {
  render() {
    if (sessionStorage.getItem("userData")) {
      // if (window.location.pathname != "/home" || "/allcourses") return null;
      // if (this.state.isLogged === 0) return null;
      // console.log(this.state.isLogged);
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
            {/* <Nav>
            <Nav.Link href="/login">
              <p>Courses</p>
            </Nav.Link>
            <Nav.Link eventKey={2} href="/signup">
              <p>About</p>
            </Nav.Link>
          </Nav> */}
            <Nav className="mr-auto">
              <NavDropdown title="Courses" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Design</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Databases
                </NavDropdown.Item>
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
          </Navbar.Collapse>
          <Nav className="mr-auto">
            <NavDropdown title="My Courses" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
              <NavDropdown.Item
                href="#"
                onClick={this.logout}
                className="logout"
              >
                Logout
                {/* <a href="#" onClick={this.logout} className="logout">
                  Logout
                </a> */}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                All Courses
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Profile IMG</Nav.Link>
          </Nav>
        </Navbar>
      );
    } else return null;
  }
}
export default UserHeader;
