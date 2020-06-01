import React, { Component } from "react";
import { Button, Form, Card, Row, Col, Container } from "react-bootstrap";
import HeaderSign from "../component/HeaderSign";
import FooterSign from "../component/FooterSign";
import SymbolSign from "../component/SymbolSign";
import { connect } from "react-redux";
import { doSignUp, changeInputUser } from "../store/action/UserAction";
import { Link } from "react-router-dom";
import "../style/main.css";

class Signup extends Component {
  postSignUp = async () => {
    await this.props.doSignUp();
    const is_login = this.props.login;
    if (!is_login) {
      this.props.history.push("/login");
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="signin text-white pb-5">
          <HeaderSign />
          <Container>
            <Row>
              <Col className="d-flex justify-content-center signin-with pt-3">
                <p className="text-sign">Register with</p>
              </Col>
            </Row>
            <SymbolSign />
            <Row>
              <Col className="d-flex justify-content-center py-1">
                <p className="text-sign">or with Imgur</p>
              </Col>
            </Row>
            <Row>
              <Container className="d-flex justify-content-center">
                <Row>
                  <Card className="card-form-signin">
                    <Card.Body>
                      <Form
                        className="form-signin"
                        onSubmit={(e) => e.preventDefault()}
                      >
                        <Form.Group>
                          <Form.Control
                            onChange={(e) => this.props.changeInput(e)}
                            name="username"
                            className="form-mark"
                            type="text"
                            placeholder="Username"
                          />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                          <Form.Control
                            onChange={(e) => this.props.changeInput(e)}
                            name="email"
                            className="form-mark"
                            type="email"
                            placeholder="Enter email"
                          />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                          <Form.Control
                            onChange={(e) => this.props.changeInput(e)}
                            name="password"
                            className="form-mark"
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                          <Form.Control
                            className="form-mark"
                            type="password"
                            placeholder="Retype Password"
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Control
                            onChange={(e) => this.props.changeInput(e)}
                            name="phone"
                            className="form-mark"
                            type="text"
                            placeholder="Phone Number"
                          />
                        </Form.Group>
                      </Form>
                      <span className="text-signup d-flex justify-content-center">
                        Standard message and data rates may apply.
                      </span>
                      <span className="text-sign d-flex justify-content-center">
                        <br />
                        Why do I have to verify my phone?
                      </span>
                    </Card.Body>
                  </Card>
                </Row>
              </Container>
            </Row>
            <Row>
              <Container className="d-flex justify-content-center ml-5 mt-3">
                <Row>
                  <Col className="d-flex align-items-center" sm={8}>
                    <Link to="/login">
                      <p className="option-text text-sign">Sign in</p>
                    </Link>
                  </Col>
                  <Col sm={4}>
                    <Button
                      onClick={this.postSignUp}
                      className="button-text"
                      variant="primary"
                    >
                      Next
                    </Button>{" "}
                  </Col>
                </Row>
              </Container>
            </Row>
            <FooterSign />
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.user.isLogin,
  };
};

const mapDispatchToProps = {
  changeInput: (e) => changeInputUser(e),
  doSignUp: doSignUp,
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
