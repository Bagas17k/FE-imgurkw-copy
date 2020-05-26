import React from "react";
import { Row, Col } from "react-bootstrap";

const HeaderSign = (props) => {
  return (
    <div>
      <Row>
        <Col className="mt-3">
          <i class="fas fa-info">
            &nbsp;<span className="text-sign">back to imgur</span>
          </i>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center my-5">
          <img src={require("../image/Imgur_logo.svg")} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default HeaderSign;
