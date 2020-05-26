import React, { Component } from "react";
import ContentCard from "../component/ContentCard";
import Footer from "../component/Footer";
import Header from "../component/MainHeader";
import TagsList from "../component/CardList";
import { Col, Row, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { getTag, handleClick, showLess } from "../store/action/imageAction";
import { doLogout } from "../store/action/UserAction";
import "../style/main.css";

class Home extends Component {
  componentDidMount() {
    this.props.getTag();
  }

  listlloop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  render() {
    return (
      <div>
        <TagsList
          tag={this.props.tag}
          handleClick={this.props.handleClick}
          showLess={this.props.showLess}
          numberOfSlice={this.props.numberOfSlice}
          doLogout={this.props.doLogout}
          {...this.props}
        />
        <Header />
        <div className="main-card">
          <Container>
            <Row>
              {this.listlloop.map((el, index) => {
                return (
                  <Col sm={3} className="d-flex justify-content-center">
                    <ContentCard />
                  </Col>
                );
              })}
            </Row>
          </Container>
          <Footer />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tag: state.image.listTag,
    showMore: state.image.showMore,
    numberOfSlice: state.image.numberOfSlice,
    isLogin: state.user.isLogin,
  };
};

const mapDispatchToProps = {
  getTag,
  handleClick,
  showLess,
  doLogout,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
