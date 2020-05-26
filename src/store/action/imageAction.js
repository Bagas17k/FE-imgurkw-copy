import axios from "axios";

const url = "http://0.0.0.0:5000";
export const getTag = (props) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(url + "/tag");
      dispatch({
        type: "GET_TAG",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const handleClick = (props) => {
  return {
    type: 'SHOW_MORE'
  }
}

export const showLess = (props) => {
  return {
    type: 'SHOW_LESS'
  }
}