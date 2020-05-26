import React from "react";
import { OverlayTrigger, Popover, Button } from "react-bootstrap";

const Newest = (props) => {
  return (
    <div>
      <OverlayTrigger
        trigger="click"
        key="bottom"
        placement="bottom"
        overlay={
          <Popover id={`popover-positioned-${"bottom"}`}>
            <Popover.Content>
              <p>
                <strong>POPULAR</strong>
              </p>
              <p>
                <strong>NEWEST</strong>
              </p>
              <p>
                <strong>BEST</strong>
              </p>
              <p>
                <strong>RANDOM</strong>
              </p>
            </Popover.Content>
          </Popover>
        }
      >
        <Button variant="dark">
          NEWEST&nbsp;
          <i class="fas fa-caret-down"></i>
        </Button>
      </OverlayTrigger>{" "}
    </div>
  );
};
export default Newest;
