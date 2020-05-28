import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Row, Col } from "react-bootstrap";
import "../style/main.css";

const DragAndDrop = (props) => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <div>
      <div {...getRootProps()}>
        <input
          {...getInputProps()}
          type="file"
          className="form-control-file"
          onChange={(e) => props.changeInput(e)}
          name="img_url"
        />
        <div>
          <Row>
            <Col
              className="drop-image d-flex align-items-center justify-content-center"
              md={{ offset: 4, span: 4 }}
            >
              <p className="border text-center">Drop images here</p>
            </Col>
          </Row>
        </div>
      </div>
      <Row>
        <Col
          className="browse-image d-flex align-items-center justify-content-center"
          md={{ offset: 4, span: 4 }}
        ></Col>
      </Row>
    </div>
  );
};
export default DragAndDrop;
