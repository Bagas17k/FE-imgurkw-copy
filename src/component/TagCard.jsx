import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const TagCard = (props, changeRouter) => {
  console.log("prooppss", props);
  changeRouter = async (id) => {
    if (props.handleRequestTagImage) {
      props.handleRequestTagImage(id);
    } else {
      await props.history.replace("/tags/" + id);
    }
  };
  return (
    <div>
      <Link onClick={() => changeRouter(props.id)} value={props.id}>
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
