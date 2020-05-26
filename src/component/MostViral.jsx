import React from "react";
import { OverlayTrigger, Popover, Button } from "react-bootstrap";

const MostViral = (props) => {
  return (
    <div>
      <OverlayTrigger
        trigger="click"
        key="bottom"
        placement="bottom"
        overlay={
          <Popover id="popover-positioned-ebottom">
            <Popover.Content>
              <p>MOST VIRAL</p>
              <p>USER SUBMITTED</p>
              <p>HIGHEST SCORING</p>
            </Popover.Content>
          </Popover>
        }
      >
        <Button variant="dark">
          <strong>MOST VIRAL</strong>&nbsp;
          <i class="fas fa-caret-down"></i>
        </Button>
      </OverlayTrigger>{" "}
    </div>
  );
};
export default MostViral;
