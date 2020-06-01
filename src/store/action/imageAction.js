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
      .get(url + '/image', {
        'params': {
          'orderby': 'created_at',
          'sort': 'desc'
        }
      })
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

export const getKomen = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(url + '/komen/user/' + id, {
        params: {
          orderby: 'created_at',
          sort: 'desc'
        }
      })
      dispatch({
        type: 'GET_KOMEN',
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const postKomen = (id) => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      komen: getState().image.komen,
      image_id: id
    }
    const token = localStorage.getItem('token')
    const myJSON = JSON.stringify(bodyRequest)
    try {
      await axios.post(url + '/komen/member', myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          'Authorization': `Bearer ${token}`
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const postImage = () => {
  return async (dispatch, getState) => {
    const imageForm = new FormData();
    imageForm.append('img_title', getState().image.img_title);
    imageForm.append('img_url', getState().image.img_url);
    imageForm.append('deskripsi', getState().image.deskripsi);
    imageForm.append('tag_id', parseInt(getState().image.tag_id));
    const token = localStorage.getItem('token')
    const img = getState().image.img_url

    if (typeof (img) === 'string') {

      try {
        await axios.post(url + '/image/string', imageForm, {
          headers: {
            "Content-Type": "multipart/form-data",
            'Authorization': `Bearer ${token}`
          }
        })

      } catch (error) {
        console.log(error)
      }

    } else {

      try {
        await axios.post(url + '/image', imageForm, {
          headers: {
            "Content-Type": "multipart/form-data",
            'Authorization': `Bearer ${token}`
          }
        })

      } catch (error) {
        console.log(error)
      }
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

export const changeInput = (e) => {
  return {
    type: "CHANGE_INPUT",
    payload: e,
  }
}

export const changeInputKomen = (e) => {
  return {
    type: "CHANGE_KOMEN_TYPE",
    payload: e,
  }
}