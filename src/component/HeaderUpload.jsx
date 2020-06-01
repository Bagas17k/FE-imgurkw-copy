import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DropDownHome from "../component/DropdownHeaderHome";
import "../style/main.css";

const HeaderUpload = (props) => {
  const isLogin = localStorage.getItem("isLogin");

  return (
    <div>
      <Navbar bg="dark" expand="lg">
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
          {isLogin ? (
            <Nav className="ml-auto d-flex justify-content-center">
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
                <DropDownHome doLogout={props.doLogout} {...props} />
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
                    <Button variant="success">SIGN UP</Button>
                  </div>
                </Link>
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HeaderUpload;
