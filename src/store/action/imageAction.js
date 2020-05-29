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

// 
export const getImage = (id) => {
  return async (dispatch) => {

    axios
      .get(url + '/image')
      .then(async (response) => {
        if (id) {
          const itemCategory = response.data.filter(item => {
            console.log('sasasas', item.tag_id, id)
            if (item.tag_id === parseInt(id)) {
              return item
            } else {
              return false
            }
          })
          console.log('cek isi', itemCategory)
          dispatch({
            type: "GET_IMAGE",
            payload: itemCategory,
          });

        } else {
          dispatch({
            type: "GET_IMAGE",
            payload: response.data
          })
        }
      }).catch(function (error) {
        console.log(error)

      })

  }
};
// 

export const getImageById = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(url + '/image/' + id)
      dispatch({
        type: 'GET_IMAGE_ID',
        payload: response.data,
        user: response.data.user,
        tag: response.data.tag
      })
    } catch (error) {
      console.log(error)
    }
  }
}


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

export const changeInputImage = (e) => {
  return {
    type: "CHANGE_IMAGE_TYPE",
    payload: e,
  }
}