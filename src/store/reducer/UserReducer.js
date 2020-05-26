const initialState = {
    isLogin: false,

}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case "CHANGE_USER_TYPE":
            return {
                ...state,
                [action.payload.target.name]: action.payload.target.value,
            };
        case 'SUCCESS_SIGNUP':
            return {
                ...state,
                isLogin: false
            }
            default:
                return state
    }
}