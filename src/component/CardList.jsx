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
      <div className="card-list text-white">
        <TopHeader
          doLogout={props.doLogout}
          getImage={() => props.getImage()}
          {...props}
        />
        <Container className="py-5">
          <h1 className="d-flex justify-content-center mb-4">
            You're already awesome.
          </h1>
          <Row>
            <Col className="ml-5">
              <span>EXPLORE TAGS</span>
            </Col>
            {!props.showMore ? (
              <Col className="show d-flex justify-content-end mr-5">
                <Link href="" onClick={() => props.handleClick()}>
                  <p className=" text-white">MORE TAGS</p>
                </Link>
              </Col>
            ) : (
              <Col className="show d-flex justify-content-end mr-5">
                <Link href="" onClick={() => props.showLess()}>
                  <p className=" text-white">LESS TAGS</p>
                </Link>
              </Col>
            )}
          </Row>

          <Row className="px-5">
            {props.tag.slice(0, numberOfItems).map((el, index) => {
              return (
                <Col className="d-flex justify-content-center" sm={3}>
                  <TagCard
                    handleRequestTagImage={(id) =>
                      props.handleRequestTagImage(id)
                    }
                    name={el.name}
                    img={el.img_url}
                    id={el.id}
                    {...props}
                  />
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
