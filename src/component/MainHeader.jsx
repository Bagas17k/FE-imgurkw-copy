import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import MostViral from "../component/MostViral";
import Newest from "../component/Newest";
import Search from "../component/Search";

const Header = (props) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img src={require("../image/imgurup.png")} alt="" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link className="align-self-center">
            <MostViral />
          </Nav.Link>
          <Nav.Link className="align-self-center">
            <div>
              <Search />
            </div>
          </Nav.Link>
        </Nav>
        <Nav className="mr-auto">
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
    </div>
  );
};

export default Header;
