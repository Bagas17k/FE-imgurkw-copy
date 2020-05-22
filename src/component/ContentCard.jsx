import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "../style/main.css";

const ContentCard = (props) => {
  return (
    <div>
      <Card style={{ width: "17rem" }} className="card-image my-1">
        <Card.Img
          variant="top"
          class="card-img-top"
          src={require("../image/ciput1.jpg")}
        />
        <Card.Body>
          <Card.Title>This Image</Card.Title>
          <Card.Text>Need some change</Card.Text>
        </Card.Body>
        <Container className="simbol-card">
          <Row className="mb-2 text-center">
            <Col>
              <i class="fas fa-long-arrow-alt-up">&nbsp;159</i>
            </Col>
            <Col>
              <i class="fas fa-comment-dots">&nbsp;10</i>
            </Col>
            <Col>
              <i class="fas fa-eye">&nbsp;6k</i>
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
};

export default ContentCard;
