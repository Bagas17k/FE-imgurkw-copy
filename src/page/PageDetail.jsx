import React, { Component } from "react";
import moment from "moment";
import {
  Badge,
  Form,
  Button,
  Card,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { connect } from "react-redux";
import { doLogout } from "../store/action/UserAction";
import {
  getImageById,
  getKomen,
  changeInputKomen,
  postKomen,
} from "../store/action/imageAction";
import HeaderDetail from "../component/HeaderDetail";
import Komen from "../component/Komen";
import { Link } from "react-router-dom";
import "../style/main.css";

class PageDetail extends Component {
  isLogin = localStorage.getItem("isLogin");
  componentDidMount() {
    this.props.getImageById(this.props.match.params.id);
    this.props.getKomen(this.props.match.params.id);
  }
  postKomen = async (id) => {
    if (this.props.postKomen) {
      await this.props.postKomen(id);
      this.props.getKomen(id);
      document.getElementById("formKomen").value = "";
    }
  };

  render() {
    const createdUTC = moment.utc(this.props.imageID.created_at).format("LLL");

    return (
      <React.Fragment>
        <div className="pageDetail">
          <HeaderDetail doLogout={this.doLogout} {...this.props} />
          <Container>
            <Row>
              <Col sm={8}>
                <Row>
                  <div className="mb-4">
                    <img
                      src={require("../image/iklan2.png")}
                      width="760px"
                      alt="iklan"
                    />
                  </div>
                  <div
                    className="cardDetail text-white header"
                    style={{ width: "900px" }}
                    id="myHeader"
                  >
                    <Container className="my-1 content">
                      <Row>
                        <Col sm={8}>
                          <Card.Title>
                            {this.props.imageID.img_title}
                          </Card.Title>
                          <Row className="userPost">
                            <Col sm={3}>
                              <Card.Text>
                                by {this.props.user.username}
                              </Card.Text>
                            </Col>
                            <Card.Text>
                              {moment(createdUTC).fromNow()}
                            </Card.Text>
                            <Col></Col>
                          </Row>
                        </Col>
                        <Col className="d-flex justify-content-end" sm={4}>
                          <Row>
                            <Col className="mr-1" sm={2}>
                              <Button variant="dark">
                                <i class="fas fa-chevron-left"></i>
                              </Button>{" "}
                            </Col>
                            <Col sm={9}>
                              <Button variant="primary">
                                Next Post&nbsp;
                                <i class="fas fa-chevron-right"></i>
                              </Button>{" "}
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  <Card
                    className="cardDetail text-white"
                    style={{ width: "900px" }}
                  >
                    <Card.Img variant="top" src={this.props.imageID.img_url} />
                    <Card.Body>
                      <Container>
                        <Card.Text>{this.props.imageID.deskripsi}</Card.Text>
                        {this.isLogin ? (
                          <div>
                            <Card.Text>
                              <Row>
                                <Col>
                                  <Row>
                                    <Col sm={3}>
                                      <h1>
                                        {" "}
                                        <i class="fas fa-arrow-alt-circle-up"></i>
                                      </h1>
                                    </Col>
                                    <Col sm={3}>
                                      <h1>
                                        <i class="fas fa-arrow-alt-circle-down"></i>
                                      </h1>
                                    </Col>
                                    <Col sm={3}>
                                      <Row>
                                        <Col sm={5}>
                                          {" "}
                                          <h1>
                                            <i class="far fa-heart"></i>{" "}
                                          </h1>
                                        </Col>
                                        <Col
                                          className="align-self-center"
                                          sm={1}
                                        >
                                          <i class="fas fa-plus"></i>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col className="d-flex justify-content-end">
                                  <Row>
                                    <h1>
                                      <i class="fb-detail fab fa-facebook mr-2"></i>
                                    </h1>
                                    <h1>
                                      <i class="twt-detail fab fa-twitter-square mr-2"></i>
                                    </h1>
                                    <h1>
                                      <i class="pint-detail fab fa-pinterest mr-2"></i>
                                    </h1>
                                    <h1>
                                      <i class="reddit-detail fab fa-reddit-square mr-2"></i>
                                    </h1>
                                    <h1>
                                      <i class="fas fa-ellipsis-h"></i>
                                    </h1>
                                  </Row>
                                </Col>
                              </Row>
                            </Card.Text>
                            <Card.Text>
                              <span className="mr-3">1,710 Points</span>
                              <span className="ml-3">57,547 Views</span>
                            </Card.Text>
                            <Card.Text>
                              <Badge pill variant="danger">
                                {this.props.tag.name}
                              </Badge>
                            </Card.Text>
                          </div>
                        ) : (
                          <Card.Text>
                            <Badge pill variant="danger">
                              {this.props.tag.name}
                            </Badge>
                          </Card.Text>
                        )}
                      </Container>
                    </Card.Body>
                  </Card>

                  <div className="w-100 mt-3 border formKomen text-white">
                    {this.isLogin ? (
                      <Container className="my-2">
                        <Form onSubmit={(e) => e.preventDefault()}>
                          <Form.Group
                            className="formKomen"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              id="formKomen"
                              className="form-comment mb-3 formKomen text-white"
                              type="text"
                              name="komen"
                              onChange={(e) => this.props.changeInputKomen(e)}
                              placeholder="Write a comment"
                            />
                          </Form.Group>
                          <Row>
                            <Col>
                              <span className="ml-2">
                                remember the community rules
                              </span>
                            </Col>
                            <Col className="d-flex justify-content-end">
                              <Button className="mr-1" variant="outline-light">
                                GIF
                              </Button>
                              <Button
                                className="ml-1"
                                variant="secondary"
                                type="submit"
                                onClick={() =>
                                  this.postKomen(this.props.imageID.id)
                                }
                                value={this.props.imageID.id}
                              >
                                Post
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </Container>
                    ) : (
                      <Container className="my-2">
                        <Row>
                          <Col className="align-self-center">
                            <span>Sign in to leave a comment</span>
                          </Col>
                          <Col className="d-flex justify-content-end">
                            <Link className="align-self-center" to="/login">
                              <div className="mr-1">
                                <i>SIGN IN</i>
                              </div>
                            </Link>

                            <Link to="/signup">
                              <div className="ml-1">
                                <Button variant="dark">SIGN UP</Button>
                              </div>
                            </Link>
                          </Col>
                        </Row>
                      </Container>
                    )}
                  </div>
                </Row>
                <div className="d-flex justify-content-between mt-3 text-white">
                  <div>
                    <span>{this.props.komen.length} COMMENTS</span>
                  </div>
                  <div>
                    <span className="mr-2">
                      <i class="fas fa-expand"></i>&nbsp;Expands All
                    </span>
                    <span className="ml-2">
                      Best&nbsp;<i class="fas fa-chevron-down"></i>
                    </span>
                  </div>
                </div>
                {this.props.komen.map((el, index) => {
                  return (
                    <Komen
                      komen={el.komen}
                      user={el.user.username}
                      created={el.created_at}
                    />
                  );
                })}
              </Col>
              <Col sm={4}>
                <Row className="mb-3 text-white">
                  <Col sm={8}>
                    <div>
                      <span>MOST VIRAL IMAGE</span>
                      <br />
                      <span>newest first</span>
                    </div>
                  </Col>
                  <Col className="ml-auto" sm={4}>
                    <div>
                      <i class="fas fa-list-ul mr-1"></i>
                      <i class="fas fa-th ml-1"></i>
                    </div>
                  </Col>
                </Row>
                <div>
                  <Table
                    striped
                    bordered
                    hover
                    className="tabelDetail text-white"
                  >
                    <tr>
                      <td>
                        <Row>
                          <Col sm={4}>
                            <img
                              className="mr-1"
                              src={this.props.imageID.img_url}
                              width={"113px"}
                              height={"80px"}
                              alt="g1"
                            />
                          </Col>
                          <Col sm={8}>
                            <span>{this.props.imageID.img_title}</span>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Row>
                          <Col sm={4}>
                            <img
                              className="mr-1"
                              src={require("../image/detail1.jpg")}
                              width={"113px"}
                              height={"80px"}
                              alt="g1"
                            />
                          </Col>
                          <Col sm={8}>
                            <span>Mini dump for a late night dump</span>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Row>
                          <Col sm={4}>
                            <img
                              className="mr-1"
                              src={require("../image/detail1.jpg")}
                              width={"113px"}
                              height={"80px"}
                              alt="g1"
                            />
                          </Col>
                          <Col sm={8}>
                            <span>Mini dump for a late night dump</span>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Row>
                          <Col sm={4}>
                            <img
                              className="mr-1"
                              src={require("../image/detail1.jpg")}
                              width={"113px"}
                              height={"80px"}
                              alt="g1"
                            />
                          </Col>
                          <Col sm={8}>
                            <span>Mini dump for a late night dump</span>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                  </Table>
                  <img src={require("../image/iklan.png")} alt="iklan" cclas />
                </div>
                <hr className="grs" />
                <Container className="choiceDetail text-white mb-5">
                  <span className="loveImgur mb-4">
                    Love Imgur? Join our team!
                  </span>
                  <div className="dotDetail">
                    <br />
                    <span>
                      about&nbsp;<i class="ml-2 fas fa-circle">&nbsp;</i>
                      emerald&nbsp;
                      <i class="fas fa-circle">&nbsp;</i>store&nbsp;
                      <i class="fas fa-circle">&nbsp;</i>help&nbsp;
                      <i class="fas fa-circle">&nbsp;</i>blog
                    </span>
                    <br />
                    <span>
                      terms&nbsp;<i class="ml-2 fas fa-circle">&nbsp;</i>
                      privacy&nbsp;
                      <i class="fas fa-circle">&nbsp;</i>ccpa&nbsp;
                      <i class="fas fa-circle">&nbsp;</i>apps&nbsp;
                      <i class="fas fa-circle">&nbsp;</i>api
                    </span>
                    <br />
                    <span>
                      advertise&nbsp;
                      <i class="ml-2 fas fa-circle">&nbsp;</i>ad choices &nbsp;
                      <i class="fas fa-circle">&nbsp;</i>&nbsp;reposrt ad
                    </span>
                    <br />
                    <span>
                      requests deletion&nbsp;
                      <i class="ml-2 fas fa-circle">&nbsp;</i>community rules
                    </span>
                    <br />
                  </div>
                </Container>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLogin: state.user.isLogin,
    imageID: state.image.imageID,
    created: state.image.imageID.created_at,
    user: state.image.userId,
    tag: state.image.tagId,
    komen: state.image.komenList,
  };
};

const mapDispatchToProps = {
  doLogout,
  getImageById,
  getKomen,
  changeInputKomen,
  postKomen,
};
export default connect(mapStateToProps, mapDispatchToProps)(PageDetail);
