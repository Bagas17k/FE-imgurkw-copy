const initialAtate = {
    listTag: [],
    listImage: [],
    showMore: false

}

export default function imageReducer(state = initialAtate, action) {
    switch (action.type) {
        case 'GET_TAG':
            return {
                ...state,
                listTag: action.payload
            }
            case 'GET_IMAGE':
                return {
                    ...state,
                    listImage: action.payload
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
                                [action.payload.target.name]: action.payload.target.files[0]
                            }
                            default:
                                return state
    }
}