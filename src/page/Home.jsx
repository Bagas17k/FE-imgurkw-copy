import React, { Component } from "react";
import ContentCard from "../component/ContentCard";
import Footer from "../component/Footer";
import { Col, Row, Container } from "react-bootstrap";
import "../style/main.css";

class Home extends Component {
  listlloop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  render() {
    return (
      <div className="main-card">
        <Container>
          <Row>
            {this.listlloop.map((el, index) => {
              return (
                <Col sm={3}>
                  <ContentCard />
                </Col>
              );
            })}
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
export default Home;
