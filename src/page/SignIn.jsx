import React, { Component } from "react";
import { Button, Form, Card, Row, Col, Container } from "react-bootstrap";
import HeaderSign from "../component/HeaderSign";
import FooterSign from "../component/FooterSign";
import SymbolSign from "../component/SymbolSign";
import { Link } from "react-router-dom";
import "../style/main.css";

class Signin extends Component {
  render() {
    return (
      <div className="signin text-white">
        <Container>
          <HeaderSign />
          <Row>
            <Col className="d-flex justify-content-center signin-with mt-3">
              <p className="text-sign">Sign In with</p>
            </Col>
          </Row>
          <SymbolSign />
          <Row>
            <Col className="d-flex justify-content-center my-1">
              <p className="text-sign">or with Imgur</p>
            </Col>
          </Row>
          <Row>
            <Container className="d-flex justify-content-center">
              <Row>
                <Card className="card-form-signin">
                  <Card.Body>
                    <Form className="form-signin">
                      <Form.Group controlId="formGroupEmail">
                        <Form.Control
                          className="form-mark"
                          type="text"
                          placeholder="Username or email"
                        />
                      </Form.Group>
                      <Form.Group controlId="formGroupPassword">
                        <Form.Control
                          className="form-mark"
                          type="password"
                          placeholder="Password"
                        />
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Card>
              </Row>
            </Container>
          </Row>
          <Row>
            <Container className="d-flex justify-content-center ml-5 mt-3">
              <Row>
                <Col className="d-flex align-items-center" sm={8}>
                  <Link to="/signup">
                    <p className="option-text">need an account?</p>
                  </Link>
                </Col>
                <Col sm={4}>
                  <Button className="button-text" variant="primary">
                    Sign In
                  </Button>{" "}
                </Col>
              </Row>
            </Container>
          </Row>
          <FooterSign />
        </Container>
      </div>
    );
  }
}

export default Signin;
