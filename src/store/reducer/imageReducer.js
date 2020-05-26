const initialAtate = {
    listTag: [],
    showMore: false

}

export default function imageReducer(state = initialAtate, action) {
    switch (action.type) {
        case 'GET_TAG':
            return {
                ...state,
                listTag: action.payload
            }
            case 'SHOW_MORE':
                return {
                    ...state,
                    showMore: true
                }
                case 'SHOW_LESS':
                    return {
                        ...state,
                        showMore: false
                    }
                    case 'CHANGE_IMAGE_TYPE':
                        return {
                            ...state,
                            [action.payload.target.name]: action.payload.target.value,
                        }
                        default:
                            return state
    }
}