import React from "react";
import { Row, Col } from "react-bootstrap";

const FooterSign = (props) => {
  return (
    <div>
      <Row>
        <Col sm={1}>
          <p className="text-sign">terms</p>
        </Col>
        <Col sm={1}>
          <p className="text-sign">privacy</p>
        </Col>
      </Row>
    </div>
  );
};

export default FooterSign;
