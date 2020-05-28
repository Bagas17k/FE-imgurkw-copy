import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const TagCard = (props, changeRouter) => {
  changeRouter = async (tag) => {
    if (props.handleTag) {
      props.handleTag(tag);
    } else {
      await props.history.replace("/tags/" + tag);
    }
  };
  return (
    <div>
      <Link onClick={() => changeRouter(props.name)}>
        <Card style={{ width: "15rem" }} className="card-tag mr-auto mb-2">
          <Card.Img
            variant="top"
            src={props.img}
            className="img-fluid"
            height={"100px"}
          />
          <Card.Body>
            <p className="text-center">{props.name}</p>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};
export default TagCard;
