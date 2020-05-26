import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import TagCard from "../component/TagCard";
import TopHeader from "../component/TopHeader";
import "../style/main.css";

const TagsList = (props) => {
  const numberOfItems = props.showMore ? props.tag.length : 4;
  return (
    <div>
      <div>
        <TopHeader doLogout={props.doLogout} {...props} />
        <Container>
          <h1 className="d-flex justify-content-center">
            You're already awesome.
          </h1>
          <Row>
            <Col>
              <span>EXPLORE TAGS</span>
            </Col>
            {!props.showMore ? (
              <Col className="show d-flex justify-content-end">
                <Link href="" onClick={() => props.handleClick()}>
                  MORE TAGS
                </Link>
              </Col>
            ) : (
              <Col className="show d-flex justify-content-end">
                <Link href="" onClick={() => props.showLess()}>
                  LESS TAGS
                </Link>
              </Col>
            )}
          </Row>

          <Row>
            {props.tag.slice(0, numberOfItems).map((el, index) => {
              return (
                <Col className="d-flex justify-content-center" sm={3}>
                  <TagCard name={el.name} img={el.img_url} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TagsList;
