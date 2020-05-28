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


export const doLogin = (props) => {
    return async (dispatch, getState) => {
        const username = getState().user.username;
        const password = getState().user.password;
        try {
            const response = await axios.get(url + "login", {
                params: {
                    username: username,
                    password: password,
                },
            });
            dispatch({
                type: "SUCCESS_LOGIN",
                payload: response.data
            });
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("isLogin", true);

            const token = localStorage.getItem("token");

            const bio = await axios.get(url + "user/member", {
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Accept: "application/json; charset=utf-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            localStorage.setItem("bio", JSON.stringify(bio.data));
        } catch (error) {
            console.log(error);
        }
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