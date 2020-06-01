import React, { Component } from "react";
import DragAndDrop from "../component/DragAndDrop";
import { connect } from "react-redux";
import { changeInputImage } from "../store/action/imageAction";

class UploadImage extends Component {
  render() {
    return (
      <div>
        <DragAndDrop changeInput={(e) => this.changeInput(e)} {...this.props} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLogin: state.user.isLogin,
  };
};

const mapDispatchToProps = {
  changeInput: (e) => changeInputImage(e),
};
export default connect(mapStateToProps, mapDispatchToProps)(UploadImage);
