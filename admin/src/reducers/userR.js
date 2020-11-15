import { registerConstants } from "../actions/constants"

const initState = {
    error: '',
    message: '',
    loading: false
}

export default (state = initState, action) => {
    switch (action.type) {
        case registerConstants.USER_REGISTER_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case registerConstants.USER_REGISTER_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: action.payload.message
            }
            break;
        case registerConstants.USER_REGISTER_REQUEST:
            state = {
                ...initState,
                loading: false,
                message: action.payload.message
            }
            break;
    }
    return state
}