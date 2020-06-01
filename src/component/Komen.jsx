import React from "react";
import moment from "moment";
import { Container, Badge } from "react-bootstrap";

const Komen = (props) => {
  const createdUTC = moment.utc(props.created).format("LLL");
  console.log("timeutc", createdUTC);
  console.log("timeprops", props.created);
  return (
    <div>
      <hr className="grs" />
      <div className="border formKomen text-white">
        <Container>
          <div className="my-3">
            {" "}
            <Badge pill variant="primary">
              <span className="mr-2">{props.user}</span>
            </Badge>
            <span className="ml-2 timeKomen">
              {moment(createdUTC).fromNow()}
            </span>
          </div>
          <p>{props.komen}</p>
        </Container>
      </div>
    </div>
  );
};

export default Komen;
