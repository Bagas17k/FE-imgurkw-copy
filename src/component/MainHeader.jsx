import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import MostViral from "../component/MostViral";
import Newest from "../component/Newest";
// import Search from "../component/Search";
import { Link } from "react-router-dom";
import BackToTop from "react-back-to-top-button";

const Header = (props) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/">
            <img src={require("../image/imgurup.png")} alt="" />
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link className="align-self-center">
            <MostViral />
          </Nav.Link>
          <Nav.Link className="align-self-center">
            <div>{/* <Search /> */}</div>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className="Link">
            <div>
              <Newest />
            </div>
          </Nav.Link>
          <Nav.Link className="align-self-center">
            <div>
              <i class="far fa-pause-circle text-white"></i>
            </div>
          </Nav.Link>
          <Nav.Link className="align-self-center">
            <div>
              <i class="fas fa-th-large"></i>
            </div>
          </Nav.Link>
        </Nav>
      </Navbar>
      <BackToTop showOn showAt={100} speed={1000} easing="easeInOutQuint">
        <span className="text-white">
          <i class="fas fa-arrow-up"></i>
        </span>
      </BackToTop>
    </div>
  );
};

export default Header;
