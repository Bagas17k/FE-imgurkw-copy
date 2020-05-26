import React from "react";
import { Row, Col, OverlayTrigger, Popover, Button } from "react-bootstrap";
import "../style/main.css";

const Footer = (props) => {
  return (
    <div>
      <Row className="footer mt-4">
        <Col className="footer-list align-self-center" sm={9}>
          <Col xs={2}>
            <p>© 2020 Imgur, Inc</p>
          </Col>
        </Col>
        <Col sm={1}>
          <OverlayTrigger
            trigger="click"
            key={"top"}
            placement={"top"}
            className="pop-trigger"
            overlay={
              <Popover id={`popover-positioned-${"top"}`}>
                <Popover.Content>
                  <Row>
                    <Col>
                      <ul className="pop-up-footer">
                        <li className="my-2">Help</li>
                        <li className="my-2">Careers</li>
                      </ul>
                    </Col>
                    <Col>
                      <ul className="pop-up-footer">
                        <li className="my-2">Store</li>
                        <li className="my-2">API</li>
                      </ul>
                    </Col>
                  </Row>
                </Popover.Content>
              </Popover>
            }
          >
            <Button variant="secondary">
              <i class="fas fa-ellipsis-h"></i>
            </Button>
          </OverlayTrigger>
        </Col>
        <Col sm={2}>Get the App</Col>
      </Row>
    </div>
  );
};
export default Footer;
