import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { PostData } from "../../services/PostData";
import "./Login.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirectToReferrer: false,
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  login() {
    if (this.state.username && this.state.password) {
      PostData("login", this.state).then((result) => {
        let responseJson = result;
        if (responseJson.userData) {
          sessionStorage.setItem("userData", JSON.stringify(responseJson));
          this.setState({ redirectToReferrer: true });
        } else alert(result.error);
      });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    if (this.state.redirectToReferrer) {
      return <Redirect to={"/home"} />;
    }
    if (sessionStorage.getItem("userData")) {
      return <Redirect to={"/home"} />;
    }
    return (
      <div>
        <Container>
          <Row>
            <Col>1 of 3</Col>
            <Col xs={6}>
              <div>
                <Form className="form">
                  <h4>Login to learn online</h4>
                  <Form.Label column sm={3}>
                    Username
                  </Form.Label>
                  <Form.Group as={Row}>
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      onChange={this.onChange}
                    />
                  </Form.Group>
                  <Form.Label column sm={3}>
                    Password
                  </Form.Label>
                  <Form.Group as={Row}>
                    {" "}
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={this.onChange}
                    />
                  </Form.Group>
                  <Form.Group as={Row}>
                    {" "}
                    <input
                      type="submit"
                      className="button"
                      value="Login"
                      onClick={this.login}
                    />
                  </Form.Group>

                  <a href="/signup">Sign Up</a>
                </Form>
              </div>
            </Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Login;
