import React from "react";
import Search from "../component/Search";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DropDownDetail from "../component/DropDownDetail";
import BackToTop from "react-back-to-top-button";
import "../style/main.css";

const HeaderDetail = (props) => {
  const isLogin = localStorage.getItem("isLogin");

  return (
    <div>
      <Navbar className="mb-5" bg="dark" expand="lg">
        <Link to="/" onClick={props.getImage ? () => props.getImage() : null}>
          <img
            id="logo-header"
            src={require("../image/Imgur_logo.svg")}
            alt="logo"
            width="94px"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="align-self-center mx-5">
              {isLogin ? (
                <Link to="/upload/image">
                  <Button variant="success">
                    <i class="far fa-plus-square"></i>&nbsp;NEW POST
                  </Button>
                </Link>
              ) : (
                <Link to="/login">
                  <Button variant="success">
                    <i class="far fa-plus-square"></i>&nbsp;NEW POST
                  </Button>
                </Link>
              )}
            </Nav.Link>
            {isLogin ? null : (
              <Nav.Link className="align-self-center">
                <div>
                  <Search />
                </div>
              </Nav.Link>
            )}
          </Nav>
          {isLogin ? (
            <Nav className="d-flex justify-content-center">
              <Nav.Link className="align-self-center">
                <div>
                  <i class="fas fa-ribbon text-white"></i>
                </div>
              </Nav.Link>
              <Nav.Link className="align-self-center">
                <div>
                  <i class="far fa-comment-dots text-white"></i>{" "}
                </div>
              </Nav.Link>
              <Nav.Link className="align-self-center">
                <div>
                  <i class="far fa-bell text-white"></i>
                </div>
              </Nav.Link>
              <Nav.Link className="align-self-center">
                <div>
                  <DropDownDetail doLogout={props.doLogout} {...props} />
                </div>
              </Nav.Link>
            </Nav>
          ) : (
            <Nav className="d-flex justify-content-center">
              <Nav.Link className="align-self-center">
                <div>
                  <i class="fas fa-ribbon text-white"></i>
                </div>
              </Nav.Link>
              <Nav.Link className="align-self-center">
                <Link to="/login">
                  <div className="signin-text">
                    <i>SIGN IN</i>
                  </div>
                </Link>
              </Nav.Link>
              <Nav.Link className="align-self-center">
                <Link to="/signup">
                  <div>
                    <Button variant="dark">SIGN UP</Button>
                  </div>
                </Link>
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
      <BackToTop showOn showAt={100} speed={1000} easing="easeInOutQuint">
        <span className="text-white">
          <i class="fas fa-arrow-up"></i>
        </span>
      </BackToTop>
    </div>
  );
};
export default HeaderDetail;
