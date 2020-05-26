import React from "react";
import { FormControl, Button, InputGroup } from "react-bootstrap";
import "../style/main.css";

const Search = (props) => {
  return (
    <div>
      <InputGroup className="search-bar mb-3 ml-5">
        <FormControl
          placeholder="Images, #tags, @users 0h my!"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" className="bg-light">
            <i class="fas fa-search"></i>
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};
export default Search;
