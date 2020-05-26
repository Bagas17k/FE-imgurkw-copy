import React from "react";
import { Card } from "react-bootstrap";

const TagCard = (props) => {
  return (
    <div>
      <Card style={{ width: "16rem" }} className="mr-auto mb-2">
        <Card.Img variant="top" src={props.img} className="img-fluid" />
        <Card.Body>
          <p className="text-center">{props.name}</p>
        </Card.Body>
      </Card>
    </div>
  );
};
export default TagCard;
