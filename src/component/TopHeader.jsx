import React from "react";
import Search from "../component/Search";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopHeader = (props, postSignout) => {
  const isLogin = localStorage.getItem("isLogin");
  postSignout = async () => {
    await props.doLogout();
    const isLogin = localStorage.getItem("isLogin");
    if (!isLogin) {
      props.history.push("/login");
    }
  };
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
            <Nav.Link className="align-self-center">
              <div>
                <Search />
              </div>
            </Nav.Link>
          </Nav>
          {isLogin ? (
            <Nav className="d-flex justify-content-center">
              <Nav.Link className="align-self-center">
                <div>
                  <i class="far fa-pause-circle text-white"></i>
                </div>
              </Nav.Link>
              <Nav.Link className="align-self-center">
                <Link to="/">
                  <div>
                    <i>PROFILE</i>
                  </div>
                </Link>
              </Nav.Link>
              <Nav.Link className="align-self-center">
                <div>
                  {/* <Link to="/login"> */}
                  <Button onClick={() => postSignout()} variant="success">
                    SIGN OUT
                  </Button>
                  {/* </Link> */}
                </div>
              </Nav.Link>
            </Nav>
          ) : (
            <Nav className="d-flex justify-content-center">
              <Nav.Link className="align-self-center">
                <div>
                  <i class="far fa-pause-circle text-white"></i>
                </div>
              </Nav.Link>
              <Nav.Link className="align-self-center">
                <Link to="/login">
                  <div>
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

export default TopHeader;
