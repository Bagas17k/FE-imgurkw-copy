import React, { Component } from "react";
import HeaderUpload from "../component/HeaderUpload";
import { connect } from "react-redux";
import { doLogout } from "../store/action/UserAction";
import {
  changeInputImage,
  changeInput,
  postImage,
} from "../store/action/imageAction";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";

class UploadImage extends Component {
  previewFile = (e) => {
    this.props.changeInputImage(e);
    const preview = document.querySelector("img[id=img]");
    const file = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        // convert image file to base64 string
        preview.src = reader.result;
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  postImage = async () => {
    if (this.props.postImage) {
      await this.props.postImage();
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="all-post-image text-white">
          <HeaderUpload doLogout={this.props.doLogout} {...this.props} />

          <div className="mt-5">
            <Container>
              <Form onSubmit={(e) => e.preventDefault()}>
                <Row>
                  <Col sm={8}>
                    <div>
                      <div className="border post-zone">
                        <Container>
                          <h5 className="text-center">UPLOAD YOUR IMAGE</h5>
                          <div className="my-2">
                            <Form.File id="formcheck-api-regular">
                              <input
                                id="imageUp"
                                name="img_url"
                                type="file"
                                onChange={(e) => this.previewFile(e)}
                              />
                            </Form.File>
                          </div>
                          <div className="text-center">
                            <p>OR</p>
                            <h5 className="my-2">COPY YOUR URL</h5>
                          </div>
                          <input
                            id="imageUp"
                            className="form-image form-comment mb-3 formKomen text-white"
                            type="text"
                            name="img_url"
                            placeholder="Image url"
                            onChange={(e) => this.props.changeInput(e)}
                          />
                        </Container>
                      </div>
                    </div>
                    <div className="border mb-2 image-title">
                      <Form.Group
                        className="formKomen"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          className="form-comment formKomen text-white"
                          type="text"
                          name="img_title"
                          placeholder="Give your post a title"
                          onChange={(e) => this.props.changeInput(e)}
                        />
                      </Form.Group>
                    </div>
                    <Card style={{ width: "731px" }} className="border preview">
                      <Card.Img
                        height="300px"
                        id="img"
                        src={this.props.image}
                        alt="preview"
                      />

                      <Card.Body>
                        <Form.Group
                          className="formKomen"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control
                            className="form-comment mb-3 formKomen text-white"
                            type="text"
                            name="deskripsi"
                            placeholder="Add a description #tags and #mention"
                            onChange={(e) => this.props.changeInput(e)}
                          />
                        </Form.Group>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={4}>
                    <div>
                      <Button
                        onClick={() => this.postImage()}
                        variant="success"
                      >
                        Share to community
                      </Button>{" "}
                      <Button variant="secondary">Hidden</Button>
                    </div>
                    <Form.Group as={Row} controlId="formHorizontalCheck">
                      <Col sm={{ span: 10 }}>
                        <Form.Check label="Mature (?)" />
                      </Col>
                    </Form.Group>
                    <hr />
                    <div>
                      <span>Help people find your post</span>
                      <br />
                      <span>Learn More</span>
                    </div>
                    <div className="tagUpload">
                      <h6>TAGS</h6>
                      <Form.Control
                        className="badge-pill"
                        as="select"
                        name="tag_id"
                        onChange={(e) => this.props.changeInput(e)}
                      >
                        <option>TAGS +</option>
                        <option value="1">Oddly Satisfying</option>
                        <option value="2">Civilization 5</option>
                        <option value="3">Fractals</option>
                        <option value="4">Funny</option>
                        <option value="5">Work From Home</option>
                        <option value="6">Unmuted</option>
                        <option value="7">Coronavirus</option>
                        <option value="8">Distancing Together</option>
                        <option value="9">TigerkIng</option>
                        <option value="10">CoffIndance</option>
                        <option value="11">Murder Hornets</option>
                        <option value="12">Movie To Watch</option>
                        <option value="13">Final fantasy</option>
                        <option value="14">Animal Crossing</option>
                        <option value="15">Cats</option>
                        <option value="16">Science And Tech</option>
                      </Form.Control>
                    </div>
                    <hr />
                    <div className="border">
                      <Container className="py-3 choice-upload">
                        <h6>IMG TOOLS</h6>
                        <span>
                          <i class="fas fa-plus"></i>&nbsp;Add more images
                        </span>
                        <br />
                        <span>
                          <i class="fas fa-code"></i>&nbsp;Embed post
                        </span>
                        <br />
                        <span>
                          <i class="fas fa-arrow-circle-down"></i>&nbsp;Download
                          post
                        </span>
                        <br />
                        <span>
                          <i class="fas fa-trash"></i>&nbsp;Delete post
                        </span>
                      </Container>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Container>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLogin: state.user.isLogin,
    image: state.image.img_url,
  };
};

const mapDispatchToProps = {
  doLogout,
  changeInputImage,
  changeInput,
  postImage,
};
export default connect(mapStateToProps, mapDispatchToProps)(UploadImage);
