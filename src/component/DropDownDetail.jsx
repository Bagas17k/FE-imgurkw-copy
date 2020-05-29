import React from "react";
import { Col, Row, OverlayTrigger, Popover, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/main.css";

const DropDownDetail = (props, postSignout) => {
  const bio = JSON.parse(localStorage.getItem("bio"));
  postSignout = async () => {
    await props.doLogout();
    const isLogin = localStorage.getItem("isLogin");
    if (!isLogin) {
      props.history.push("/login");
    }
  };

  return (
    <div>
      <OverlayTrigger
        trigger="click"
        key="bottom"
        placement="bottom"
        overlay={
          <Popover id={`popover-positioned-bottom`}>
            <Popover.Content>
              <div>
                <span>images</span>
                <br />
                <span>gallery profile</span>
                <br />
                <span>favorites</span>
                <br />
                <span>messages</span>
              </div>
            </Popover.Content>
            <Popover.Content>
              <Row>
                <Col>
                  <i class="far fa-sun">&nbsp;Settings</i>
                </Col>

                <Col>
                  <Link onClick={() => postSignout()}>
                    <i class="fas fa-power-off"></i>&nbsp;Sign Out
                  </Link>
                </Col>
              </Row>
            </Popover.Content>
          </Popover>
        }
      >
        <Badge pill variant="secondary">
          {bio.username}
        </Badge>
      </OverlayTrigger>{" "}
    </div>
  );
};
export default DropDownDetail;
