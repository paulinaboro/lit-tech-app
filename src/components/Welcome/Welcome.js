import React, { Component } from "react";
import "./Welcome.css";
import { Container, Row, Col } from "react-bootstrap";
import CoverImg from "./img/login-cover1.jpg";

class Welcome extends Component {
  render() {
    return (
      <div className="row " id="Body">
        <Container>
          <Row>
            <Col>
              {" "}
              <img
                className="CoverImg"
                src={CoverImg}
                alt="Landing Page Photo"
              />
            </Col>
            <Col>
              {/* <div className="medium-5 columns right"> */}
              <div>
                <h4>Start Learning for free</h4>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={this.onChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.onChange}
                />
                <input
                  type="submit"
                  className="button"
                  value="Login"
                  onClick={this.login}
                />
                <a href="/signup">Registration</a>
              </div>
            </Col>
          </Row>
          <a href="/login" className="button">
            Login
          </a>
          <a href="/signup" className="button success">
            Signup
          </a>
        </Container>
      </div>
    );
  }
}
export default Welcome;
