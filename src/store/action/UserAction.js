import axios from 'axios'

const url = 'http://0.0.0.0:5000/'
export const doSignUp = (props) => {
    return async (dispatch, getState) => {
        const bodyRequest = {
            username: getState().user.username,
            password: getState().user.password,
            email: getState().user.email,
            phone: getState().user.phone,
        };
        const myJSON = JSON.stringify(bodyRequest);
        await axios
            .post(url + "user", myJSON, {
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Accept: "application/json; charset=utf-8",
                },
            })
            .then(async (response) => {
                dispatch({
                    type: "SUCCESS_SIGNUP"
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    };


};


export const doLogin = () => {
    return async (dispatch, getState) => {

        await axios({
                "method": "GET",
                "url": url + "login",
                "params": {
                    username: getState().user.username,
                    password: getState().user.password,
                }
            })
            .then(async (response) => {
                console.warn("cek api", response);
                if (response.data.hasOwnProperty("token")) {
                    await dispatch({
                        type: "SUCCESS_LOGIN",
                        payload: response.data
                    });
                    localStorage.setItem("token", response.data.token)
                    localStorage.setItem("isLogin", true)
                    localStorage.setItem("status", response.data.status)
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    };
};

export const doLogout = () => {
    localStorage.clear()
    return {
        type: 'SUCCES_LOGOUT'
    }
}

export const changeInputUser = (e) => {
    return {
        type: "CHANGE_USER_TYPE",
        payload: e,
    }
}