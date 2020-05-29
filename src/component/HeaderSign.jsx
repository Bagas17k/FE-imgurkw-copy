import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/main.css";

const HeaderSign = (props) => {
  return (
    <div className="header-sign pt-2 pl-5">
      <Row>
        <Col>
          <Link to="/">
            <i class="fas fa-info text-sign">
              &nbsp;<span className="text-sign">back to imgur</span>
            </i>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center py-5">
          <img src={require("../image/Imgur_logo.svg")} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default HeaderSign;
