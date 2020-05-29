import React, { Component } from "react";
import ContentCard from "../component/ContentCard";
import Footer from "../component/Footer";
import Header from "../component/MainHeader";
import TagsList from "../component/CardList";
import { Col, Row, Container } from "react-bootstrap";
import { connect } from "react-redux";
import {
  getTag,
  getImage,
  getImageById,
  handleClick,
  showLess,
} from "../store/action/imageAction";
import { doLogout } from "../store/action/UserAction";
import "../style/main.css";

class Home extends Component {
  componentDidMount = async () => {
    this.props.getTag();
    this.props.getImage(this.props.match.params.id);
    this.props.getImage();
  };

  handleRequestTagImage = async (id) => {
    await this.props.history.replace("/tags/" + id);
    const paramTag = this.props.match.params.id;
    this.props.getImage(paramTag);
  };

  handleRequestImageId = async (id) => {
    await this.props.history.replace("/image/detail/" + id);
    this.props.getImageById(id);
  };

  render() {
    return (
      <div>
        <TagsList
          tag={this.props.tag}
          handleClick={this.props.handleClick}
          showLess={this.props.showLess}
          numberOfSlice={this.props.numberOfSlice}
          doLogout={this.props.doLogout}
          getImage={this.props.getImage}
          handleRequestTagImage={(id) => this.handleRequestTagImage(id)}
          {...this.props}
        />
        <Header />
        <div className="main-card">
          <Container className="pt-5 px-5">
            <Row>
              {this.props.listImage.map((el, index) => {
                return (
                  <Col sm={3} className="d-flex justify-content-center">
                    <ContentCard
                      title={el.img_title}
                      image={el.img_url}
                      id={el.id}
                      handleRequestImageId={(id) =>
                        this.handleRequestImageId(id)
                      }
                      {...this.props}
                    />
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
    listImage: state.image.listImage,
  };
};

const mapDispatchToProps = {
  getTag,
  handleClick,
  showLess,
  doLogout,
  getImage,
  getImageById,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
