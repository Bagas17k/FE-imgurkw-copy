import React from "react";
import { OverlayTrigger, Popover, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/main.css";

const DropDownHome = (props, postSignout) => {
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
                <span>Post</span>
                <br />
                <span>Favorites</span>
                <br />
                <span>Comments</span>
                <br />
                <span>About</span>
                <br />
                <span>Images</span>
              </div>
            </Popover.Content>
            <Popover.Content>
              <i class="far fa-sun">&nbsp;Settings</i>
            </Popover.Content>
            <Popover.Content>
              <Link onClick={() => postSignout()}>
                <i class="fas fa-power-off"></i>&nbsp;Sign Out
              </Link>
            </Popover.Content>
          </Popover>
        }
      >
        <Button className="rounded" variant="success">
          {bio.username[0].toUpperCase()}
        </Button>
      </OverlayTrigger>{" "}
    </div>
  );
};
export default DropDownHome;
