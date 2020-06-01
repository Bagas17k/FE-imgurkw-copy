import React, { Component } from "react";
import { Button, Form, Card, Row, Col, Container } from "react-bootstrap";
import HeaderSign from "../component/HeaderSign";
import FooterSign from "../component/FooterSign";
import SymbolSign from "../component/SymbolSign";
import { Link } from "react-router-dom";
import "../style/main.css";
import { connect } from "react-redux";
import { changeInputUser, doLogin } from "../store/action/UserAction";

class Signin extends Component {
  postLogin = async () => {
    await this.props.doLogin();
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin) {
      this.props.history.push("/");
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="signin text-white">
          <HeaderSign />
          <Container>
            <Row>
              <Col className="d-flex justify-content-center signin-with pt-3">
                <p className="text-sign">Sign In with</p>
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
                        <Form.Group controlId="formGroupEmail">
                          <Form.Control
                            className="form-mark"
                            type="text"
                            name="username"
                            onChange={(e) => this.props.changeInput(e)}
                            placeholder="Username or email"
                          />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                          <Form.Control
                            className="form-mark"
                            type="password"
                            name="password"
                            onChange={(e) => this.props.changeInput(e)}
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
              <Container className="d-flex justify-content-center pl-5 pt-3">
                <Row>
                  <Col className="d-flex align-items-center" sm={8}>
                    <Link to="/signup">
                      <p className="option-text text-sign">need an account?</p>
                    </Link>
                  </Col>
                  <Col sm={4}>
                    <Button
                      onClick={() => this.postLogin()}
                      className="button-text"
                      variant="primary"
                    >
                      Sign In
                    </Button>{" "}
                  </Col>
                </Row>
              </Container>
            </Row>

            <Row className="pt-5">
              <FooterSign />
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.user.isLogin,
  };
};

const mapDispatchToProps = {
  changeInput: (e) => changeInputUser(e),
  doLogin,
};
export default connect(mapStateToProps, mapDispatchToProps)(Signin);
