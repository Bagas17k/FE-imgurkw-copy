import axios from 'axios'

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
            .post("http://0.0.0.0:5000/user", myJSON, {
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

export const changeInputUser = (e) => {
    return {
        type: "CHANGE_USER_TYPE",
        payload: e,
    }
}